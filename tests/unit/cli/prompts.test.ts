import { promptProjectDetails } from '../../../src/cli/prompts';

// Mock inquirer
jest.mock('inquirer', () => ({
  prompt: jest.fn(),
}));

// Mock structure registry
jest.mock('../../../src/templates/registry', () => ({
  structureRegistry: {
    getAvailableFrameworks: jest.fn(() => ['react']),
    getAvailableStructures: jest.fn(() => ['feature-based', 'component-based']),
    getStructureByFrameworkAndType: jest.fn(() => ({
      id: 'react-feature-based',
      name: 'React Feature-Based',
      description: 'React application with feature-based architecture',
      framework: 'react',
      structure: 'feature-based',
      directories: ['src', 'tests'],
    })),
  },
}));

import inquirer from 'inquirer';

const mockedInquirer = inquirer as jest.Mocked<typeof inquirer>;

describe('CLI Prompts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock console.log to prevent output during tests
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('promptProjectDetails', () => {
    it('should prompt for framework, structure and confirmation', async () => {
      const mockAnswers = {
        framework: 'react',
        structure: 'feature-based',
        confirm: true,
      };

      // Mock the prompt calls in order
      mockedInquirer.prompt
        .mockResolvedValueOnce({ framework: 'react' })
        .mockResolvedValueOnce({ structure: 'feature-based' })
        .mockResolvedValueOnce({ confirm: true });

      const result = await promptProjectDetails();

      expect(result).toEqual(mockAnswers);
      expect(mockedInquirer.prompt).toHaveBeenCalledTimes(3);
    });

    it('should handle user cancellation', async () => {
      mockedInquirer.prompt
        .mockResolvedValueOnce({ framework: 'react' })
        .mockResolvedValueOnce({ structure: 'feature-based' })
        .mockResolvedValueOnce({ confirm: false });

      const result = await promptProjectDetails();

      expect(result.confirm).toBe(false);
    });

    it('should show project summary before confirmation', async () => {
      const consoleSpy = jest.spyOn(console, 'log');

      mockedInquirer.prompt
        .mockResolvedValueOnce({ framework: 'react' })
        .mockResolvedValueOnce({ structure: 'feature-based' })
        .mockResolvedValueOnce({ confirm: true });

      await promptProjectDetails();

      expect(consoleSpy).toHaveBeenCalledWith('\n📋 Project Summary:');
      expect(consoleSpy).toHaveBeenCalledWith('   Framework: react');
    });
  });
});
