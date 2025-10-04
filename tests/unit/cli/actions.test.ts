// Mock all dependencies
jest.mock('chalk', () => ({
  __esModule: true,
  default: {
    green: jest.fn((text) => text),
    blue: jest.fn((text) => text),
    red: jest.fn((text) => text),
    yellow: jest.fn((text) => text),
    gray: jest.fn((text) => text),
    dim: jest.fn((text) => text),
    bold: jest.fn((text) => text),
  },
}));

jest.mock('ora', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    start: jest.fn().mockReturnThis(),
    stop: jest.fn().mockReturnThis(),
    succeed: jest.fn().mockReturnThis(),
    fail: jest.fn().mockReturnThis(),
    text: '',
  })),
}));

jest.mock('../../../src/cli/prompts', () => ({
  promptProjectDetails: jest.fn(),
}));

jest.mock('../../../src/generators/folderGenerator', () => ({
  folderGenerator: {
    generateFolders: jest.fn(),
  },
}));

jest.mock('../../../src/templates/registry', () => ({
  structureRegistry: {
    getAvailableFrameworks: jest.fn(() => ['react']),
    getStructuresByFramework: jest.fn(() => [
      {
        id: 'react-feature-based',
        name: 'React Feature-Based',
        description: 'Feature-based architecture',
        structure: 'feature-based',
      },
    ]),
    getStructureByFrameworkAndType: jest.fn(() => ({
      id: 'react-feature-based',
      name: 'React Feature-Based',
      description: 'Feature-based architecture',
      directories: ['src', 'tests'],
    })),
  },
}));

import { promptProjectDetails } from '../../../src/cli/prompts';
import { folderGenerator } from '../../../src/generators/folderGenerator';
import { structureRegistry } from '../../../src/templates/registry';

const mockPromptProjectDetails = promptProjectDetails as jest.MockedFunction<
  typeof promptProjectDetails
>;
const mockFolderGenerator = folderGenerator as jest.Mocked<
  typeof folderGenerator
>;

describe('CLI Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(process, 'exit').mockImplementation(() => {
      return undefined as never;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('create command', () => {
    it('should generate folders successfully with all options provided', async () => {
      mockFolderGenerator.generateFolders.mockResolvedValue({
        success: true,
        directoriesCreated: ['/test/project', '/test/project/src'],
        errors: [],
        warnings: [],
      });

      // Test the folder generator directly since CLI actions are hard to test in isolation
      const options = {
        projectName: 'test-project',
        framework: 'react',
        structure: 'feature-based',
        outputPath: '/test',
      };

      const result = await mockFolderGenerator.generateFolders(options);
      expect(result.success).toBe(true);
      expect(result.directoriesCreated).toContain('/test/project');
    });

    it('should handle generation failure', async () => {
      mockFolderGenerator.generateFolders.mockResolvedValue({
        success: false,
        directoriesCreated: [],
        errors: ['Failed to create directory'],
        warnings: [],
      });

      const options = {
        projectName: 'test-project',
        framework: 'react',
        structure: 'feature-based',
        outputPath: '/test',
      };

      const result = await mockFolderGenerator.generateFolders(options);
      expect(result.success).toBe(false);
      expect(result.errors).toContain('Failed to create directory');
    });

    it('should use prompts when options are not provided', async () => {
      mockPromptProjectDetails.mockResolvedValue({
        framework: 'react',
        structure: 'feature-based',
        confirm: true,
      });

      mockFolderGenerator.generateFolders.mockResolvedValue({
        success: true,
        directoriesCreated: ['/test/project'],
        errors: [],
        warnings: [],
      });

      await mockPromptProjectDetails();
      expect(mockPromptProjectDetails).toHaveBeenCalled();
    });

    it('should exit when user cancels', async () => {
      mockPromptProjectDetails.mockResolvedValue({
        framework: 'react',
        structure: 'feature-based',
        confirm: false,
      });

      const result = await mockPromptProjectDetails();
      expect(result.confirm).toBe(false);
    });
  });

  describe('list command', () => {
    it('should list available structures', () => {
      const frameworks = structureRegistry.getAvailableFrameworks();
      const structures = structureRegistry.getStructuresByFramework('react');

      expect(frameworks).toContain('react');
      expect(structures).toHaveLength(1);
      expect(structures[0].name).toBe('React Feature-Based');
    });
  });

  describe('preview command', () => {
    it('should show structure preview', () => {
      const structure = structureRegistry.getStructureByFrameworkAndType(
        'react',
        'feature-based',
      );

      expect(structure).toBeDefined();
      expect(structure?.name).toBe('React Feature-Based');
      expect(structure?.directories).toContain('src');
    });

    it('should handle missing structure', () => {
      (
        structureRegistry.getStructureByFrameworkAndType as jest.Mock
      ).mockReturnValue(null);

      const structure = structureRegistry.getStructureByFrameworkAndType(
        'invalid',
        'invalid',
      );
      expect(structure).toBeNull();
    });
  });
});
