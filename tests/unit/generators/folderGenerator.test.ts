import { ProjectFolderGenerator } from '../../../src/generators/folderGenerator';
import { GenerationOptions } from '../../../src/types';
import * as fs from 'fs';
import { join } from 'path';
import * as os from 'os';

describe('ProjectFolderGenerator', () => {
  let generator: ProjectFolderGenerator;
  let tempDir: string;
  let mockOptions: GenerationOptions;

  beforeEach(async () => {
    generator = new ProjectFolderGenerator();
    tempDir = await fs.promises.mkdtemp(join(os.tmpdir(), 'skaflow-test-'));

    mockOptions = {
      projectName: 'test-project',
      framework: 'react',
      structure: 'feature-based',
      outputPath: tempDir,
    };
  });

  afterEach(async () => {
    await fs.promises.rm(tempDir, { recursive: true, force: true });
  });

  describe('generateFolders', () => {
    test('should successfully generate folder structure', async () => {
      const result = await generator.generateFolders(mockOptions);

      expect(result.success).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.directoriesCreated.length).toBeGreaterThan(0);
    });

    test('should create project directory', async () => {
      await generator.generateFolders(mockOptions);

      const projectPath = join(tempDir, 'test-project');
      expect(fs.existsSync(projectPath)).toBe(true);
      expect((await fs.promises.stat(projectPath)).isDirectory()).toBe(true);
    });

    test('should return list of created directories', async () => {
      const result = await generator.generateFolders(mockOptions);

      expect(result.directoriesCreated).toContain(
        join(tempDir, 'test-project'),
      );
      expect(result.directoriesCreated.some((dir) => dir.includes('src'))).toBe(
        true,
      );
    });

    test('should handle invalid project name', async () => {
      const invalidOptions = {
        ...mockOptions,
        projectName: '',
      };

      const result = await generator.generateFolders(invalidOptions);

      expect(result.success).toBe(false);
      expect(result.errors).toContain('Invalid project name: ');
    });

    test('should handle invalid framework', async () => {
      const invalidOptions = {
        ...mockOptions,
        framework: 'invalid-framework',
      };

      const result = await generator.generateFolders(invalidOptions);

      expect(result.success).toBe(false);
      expect(result.errors[0]).toContain('not found for framework');
    });

    test('should handle invalid structure', async () => {
      const invalidOptions = {
        ...mockOptions,
        structure: 'invalid-structure',
      };

      const result = await generator.generateFolders(invalidOptions);

      expect(result.success).toBe(false);
      expect(result.errors[0]).toContain('not found for framework');
    });

    test('should handle existing non-empty directory', async () => {
      const projectPath = join(tempDir, 'test-project');
      await fs.promises.mkdir(projectPath);
      await fs.promises.writeFile(
        join(projectPath, 'existing-file.txt'),
        'content',
      );

      const result = await generator.generateFolders(mockOptions);

      expect(result.success).toBe(false);
      expect(result.errors[0]).toContain('already exists and is not empty');
    });

    test('should handle different structure types', async () => {
      const componentBasedOptions = {
        ...mockOptions,
        structure: 'component-based',
      };

      const result = await generator.generateFolders(componentBasedOptions);

      expect(result.success).toBe(true);
      expect(result.directoriesCreated.length).toBeGreaterThan(0);
    });

    test('should handle project names with special characters', async () => {
      const specialOptions = {
        ...mockOptions,
        projectName: 'my-awesome_project', // Remove dots - they're not allowed by validation
      };

      const result = await generator.generateFolders(specialOptions);

      expect(result.success).toBe(true);
      const projectPath = join(tempDir, 'my-awesome_project');
      expect(result.directoriesCreated).toContain(projectPath);
    });

    test('should handle non-existent output path', async () => {
      const invalidOptions = {
        ...mockOptions,
        outputPath: '/completely/invalid/path/that/does/not/exist',
      };

      const result = await generator.generateFolders(invalidOptions);

      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    test('should handle unexpected errors during generation', async () => {
      // Mock the structureEngine to throw an error
      const mockStructureEngine = require('../../../src/generators/templateEngine');
      const originalGenerateFolders =
        mockStructureEngine.structureEngine.generateFolders;

      mockStructureEngine.structureEngine.generateFolders = jest
        .fn()
        .mockRejectedValue(new Error('Unexpected error'));

      const result = await generator.generateFolders(mockOptions);

      expect(result.success).toBe(false);
      expect(result.errors).toContain('Generation failed: Unexpected error');

      // Restore original function
      mockStructureEngine.structureEngine.generateFolders =
        originalGenerateFolders;
    });

    test('should validate output path exists', async () => {
      const result = await generator['validateTargetDirectory'](tempDir);
      expect(result).toBe(true);
    });

    test('should return false for invalid target directory', async () => {
      const result =
        await generator['validateTargetDirectory']('/invalid/path');
      expect(result).toBe(false);
    });

    test('should validate project name correctly', () => {
      expect(generator['validateProjectName']('valid-project')).toBe(true);
      expect(generator['validateProjectName']('ValidProject')).toBe(true);
      expect(generator['validateProjectName']('valid_project')).toBe(true);
      expect(generator['validateProjectName']('valid.project')).toBe(false); // Dots not allowed
    });

    test('should handle project name validation errors', () => {
      expect(generator['validateProjectName']('')).toBe(false);
      expect(generator['validateProjectName']('123invalid')).toBe(false);
      expect(generator['validateProjectName']('invalid/project')).toBe(false);
    });
  });
});
