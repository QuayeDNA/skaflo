import { ValidationUtils } from '../../../src/utils/validation';

describe('ValidationUtils', () => {
  describe('validateProjectName', () => {
    it('should validate valid project names', () => {
      const result = ValidationUtils.validateProjectName('my-project');
      expect(ValidationUtils.isValid(result)).toBe(true);
    });

    it('should reject empty project names', () => {
      const result = ValidationUtils.validateProjectName('');
      expect(ValidationUtils.isValid(result)).toBe(false);
      expect(ValidationUtils.getErrorMessage(result)).toContain(
        'not allowed to be empty',
      );
    });

    it('should reject names starting with numbers', () => {
      const result = ValidationUtils.validateProjectName('123project');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });

    it('should reject names with invalid characters', () => {
      const result = ValidationUtils.validateProjectName('my project!');
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

    it('should reject invalid react structures', () => {
      const result = ValidationUtils.validateStructure('invalid', 'react');
      expect(ValidationUtils.isValid(result)).toBe(false);
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
  });

  describe('validateFilePath', () => {
    it('should accept valid file paths', () => {
      expect(
        ValidationUtils.isValid(
          ValidationUtils.validateFilePath('src/index.ts'),
        ),
      ).toBe(true);
    });

    it('should reject paths with invalid characters', () => {
      const result = ValidationUtils.validateFilePath('src/invalid<file.ts');
      expect(ValidationUtils.isValid(result)).toBe(false);
    });
  });
});
