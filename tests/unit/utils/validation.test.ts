import {
  ValidationUtils,
  validateProjectName,
  directoryExists,
  isDirectoryEmpty,
} from '../../../src/utils/validation';
import Joi from 'joi';
import { existsSync, statSync, readdirSync } from 'fs';

// Mock fs functions
jest.mock('fs', () => ({
  existsSync: jest.fn(),
  statSync: jest.fn(),
  readdirSync: jest.fn(),
}));

describe('ValidationUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('validateProjectName', () => {
    it('should validate valid project names', () => {
      const result = ValidationUtils.validateProjectName('my-project');
      expect(ValidationUtils.isValid(result)).toBe(true);
    });

    it('should reject empty project names', () => {
      const result = ValidationUtils.validateProjectName('');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });

    it('should reject names starting with numbers', () => {
      const result = ValidationUtils.validateProjectName('123project');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });

    it('should reject names with dots', () => {
      const result = ValidationUtils.validateProjectName('my.project');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });
  });

  describe('validateFramework', () => {
    it('should accept valid frameworks', () => {
      expect(
        ValidationUtils.isValid(ValidationUtils.validateFramework('react')),
      ).toBe(true);
      expect(
        ValidationUtils.isValid(ValidationUtils.validateFramework('nextjs')),
      ).toBe(true);
      expect(
        ValidationUtils.isValid(ValidationUtils.validateFramework('express')),
      ).toBe(true);
    });

    it('should reject invalid frameworks', () => {
      const result = ValidationUtils.validateFramework('invalid');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });
  });

  describe('validateStructure', () => {
    it('should accept valid react structures', () => {
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateStructure('feature-based', 'react'),
        ),
      ).toBe(true);
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateStructure('component-based', 'react'),
        ),
      ).toBe(true);
    });

    it('should accept valid nextjs structures', () => {
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateStructure('app-router', 'nextjs'),
        ),
      ).toBe(true);
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateStructure('pages-router', 'nextjs'),
        ),
      ).toBe(true);
    });

    it('should accept valid express structures', () => {
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateStructure('layered', 'express'),
        ),
      ).toBe(true);
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateStructure('mvc', 'express'),
        ),
      ).toBe(true);
    });

    it('should reject invalid structures for valid frameworks', () => {
      const result = ValidationUtils.validateStructure('invalid', 'react');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });

    it('should reject structures for invalid frameworks', () => {
      const result = ValidationUtils.validateStructure(
        'feature-based',
        'invalid',
      );
      expect(ValidationUtils.isValid(result)).toBe(false);
    });
  });

  describe('validateFilePath', () => {
    it('should accept valid file paths', () => {
      const result = ValidationUtils.validateFilePath('/valid/path/to/file');
      expect(ValidationUtils.isValid(result)).toBe(true);
    });

    it('should reject paths with invalid characters', () => {
      const result = ValidationUtils.validateFilePath('/invalid/path<>:*?"|');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });
  });

  describe('validate', () => {
    it('should validate data against schema', () => {
      const schema = Joi.object({
        name: Joi.string().required(),
      });

      const validData = { name: 'test' };
      const result = ValidationUtils.validate(validData, schema);
      expect(ValidationUtils.isValid(result)).toBe(true);

      const invalidData = {};
      const invalidResult = ValidationUtils.validate(invalidData, schema);
      expect(ValidationUtils.isValid(invalidResult)).toBe(false);
    });
  });

  describe('getErrorMessage', () => {
    it('should return error message from validation result', () => {
      const result = ValidationUtils.validateProjectName('');
      const errorMessage = ValidationUtils.getErrorMessage(result);
      expect(errorMessage).toContain('not allowed to be empty');
    });

    it('should return default message when no error details', () => {
      const mockResult = {
        error: { details: [] },
        value: undefined,
      } as unknown as Joi.ValidationResult;
      const errorMessage = ValidationUtils.getErrorMessage(mockResult);
      expect(errorMessage).toBe('Validation failed');
    });

    it('should return default message when no error', () => {
      const mockResult = { value: 'test' } as unknown as Joi.ValidationResult;
      const errorMessage = ValidationUtils.getErrorMessage(mockResult);
      expect(errorMessage).toBe('Validation failed');
    });
  });

  describe('exported utility functions', () => {
    describe('validateProjectName', () => {
      it('should return boolean for project name validation', () => {
        expect(validateProjectName('valid-project')).toBe(true);
        expect(validateProjectName('')).toBe(false);
        expect(validateProjectName('123invalid')).toBe(false);
      });
    });

    describe('directoryExists', () => {
      it('should return true for existing directory', () => {
        (existsSync as jest.Mock).mockReturnValue(true);
        (statSync as jest.Mock).mockReturnValue({ isDirectory: () => true });

        expect(directoryExists('/existing/dir')).toBe(true);
        expect(existsSync).toHaveBeenCalledWith('/existing/dir');
        expect(statSync).toHaveBeenCalledWith('/existing/dir');
      });

      it('should return false for non-existing path', () => {
        (existsSync as jest.Mock).mockReturnValue(false);

        expect(directoryExists('/non/existing')).toBe(false);
        expect(existsSync).toHaveBeenCalledWith('/non/existing');
      });

      it('should return false for existing file (not directory)', () => {
        (existsSync as jest.Mock).mockReturnValue(true);
        (statSync as jest.Mock).mockReturnValue({ isDirectory: () => false });

        expect(directoryExists('/existing/file.txt')).toBe(false);
      });

      it('should return false when fs operations throw error', () => {
        (existsSync as jest.Mock).mockImplementation(() => {
          throw new Error('Permission denied');
        });

        expect(directoryExists('/protected/dir')).toBe(false);
      });
    });

    describe('isDirectoryEmpty', () => {
      it('should return true for empty directory', () => {
        (readdirSync as jest.Mock).mockReturnValue([]);

        expect(isDirectoryEmpty('/empty/dir')).toBe(true);
        expect(readdirSync).toHaveBeenCalledWith('/empty/dir');
      });

      it('should return false for non-empty directory', () => {
        (readdirSync as jest.Mock).mockReturnValue(['file1.txt', 'file2.txt']);

        expect(isDirectoryEmpty('/non/empty/dir')).toBe(false);
        expect(readdirSync).toHaveBeenCalledWith('/non/empty/dir');
      });

      it('should return false when fs operations throw error', () => {
        (readdirSync as jest.Mock).mockImplementation(() => {
          throw new Error('Permission denied');
        });

        expect(isDirectoryEmpty('/protected/dir')).toBe(false);
      });
    });
  });
});
