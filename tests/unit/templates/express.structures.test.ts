import {
  expressLayeredStructure,
  expressMvcStructure,
  expressFeatureBasedStructure,
} from '../../../src/templates/express.structures';

describe('Express Templates', () => {
  describe('expressLayeredStructure', () => {
    it('should have correct id', () => {
      expect(expressLayeredStructure.id).toBe('express-layered');
    });

    it('should have correct framework', () => {
      expect(expressLayeredStructure.framework).toBe('express');
    });

    it('should have correct structure type', () => {
      expect(expressLayeredStructure.structure).toBe('layered');
    });

    it('should have name and description', () => {
      expect(expressLayeredStructure.name).toBeTruthy();
      expect(expressLayeredStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(expressLayeredStructure.directories)).toBe(true);
      expect(expressLayeredStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include src directory', () => {
      expect(expressLayeredStructure.directories).toContain('src');
    });

    it('should include controllers layer', () => {
      expect(expressLayeredStructure.directories).toContain('src/controllers');
    });

    it('should include services layer', () => {
      expect(expressLayeredStructure.directories).toContain('src/services');
    });

    it('should include repositories layer', () => {
      expect(expressLayeredStructure.directories).toContain('src/repositories');
    });

    it('should include models directory', () => {
      expect(expressLayeredStructure.directories).toContain('src/models');
    });

    it('should include middleware directory', () => {
      expect(expressLayeredStructure.directories).toContain('src/middleware');
    });

    it('should include tests directory', () => {
      expect(expressLayeredStructure.directories).toContain('tests');
    });
  });

  describe('expressMvcStructure', () => {
    it('should have correct id', () => {
      expect(expressMvcStructure.id).toBe('express-mvc');
    });

    it('should have correct framework', () => {
      expect(expressMvcStructure.framework).toBe('express');
    });

    it('should have correct structure type', () => {
      expect(expressMvcStructure.structure).toBe('mvc');
    });

    it('should have name and description', () => {
      expect(expressMvcStructure.name).toBeTruthy();
      expect(expressMvcStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(expressMvcStructure.directories)).toBe(true);
      expect(expressMvcStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include controllers directory', () => {
      expect(expressMvcStructure.directories).toContain('src/controllers');
    });

    it('should include models directory', () => {
      expect(expressMvcStructure.directories).toContain('src/models');
    });

    it('should include views directory', () => {
      expect(expressMvcStructure.directories).toContain('src/views');
    });

    it('should include views/layouts', () => {
      expect(expressMvcStructure.directories).toContain('src/views/layouts');
    });

    it('should include views/partials', () => {
      expect(expressMvcStructure.directories).toContain('src/views/partials');
    });

    it('should include routes directory', () => {
      expect(expressMvcStructure.directories).toContain('src/routes');
    });

    it('should include public assets', () => {
      expect(expressMvcStructure.directories).toContain('public/css');
      expect(expressMvcStructure.directories).toContain('public/js');
    });
  });

  describe('expressFeatureBasedStructure', () => {
    it('should have correct id', () => {
      expect(expressFeatureBasedStructure.id).toBe('express-feature-based');
    });

    it('should have correct framework', () => {
      expect(expressFeatureBasedStructure.framework).toBe('express');
    });

    it('should have correct structure type', () => {
      expect(expressFeatureBasedStructure.structure).toBe('feature-based');
    });

    it('should have name and description', () => {
      expect(expressFeatureBasedStructure.name).toBeTruthy();
      expect(expressFeatureBasedStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(expressFeatureBasedStructure.directories)).toBe(
        true,
      );
      expect(expressFeatureBasedStructure.directories.length).toBeGreaterThan(
        0,
      );
    });

    it('should include features directory', () => {
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features',
      );
    });

    it('should include auth feature', () => {
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/auth',
      );
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/auth/controllers',
      );
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/auth/services',
      );
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/auth/models',
      );
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/auth/routes',
      );
    });

    it('should include users feature', () => {
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/users',
      );
    });

    it('should include products feature', () => {
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/features/products',
      );
    });

    it('should include shared directory', () => {
      expect(expressFeatureBasedStructure.directories).toContain('src/shared');
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/shared/middleware',
      );
      expect(expressFeatureBasedStructure.directories).toContain(
        'src/shared/utils',
      );
    });

    it('should have most directories among Express templates', () => {
      expect(
        expressFeatureBasedStructure.directories.length,
      ).toBeGreaterThanOrEqual(expressLayeredStructure.directories.length);
      expect(
        expressFeatureBasedStructure.directories.length,
      ).toBeGreaterThanOrEqual(expressMvcStructure.directories.length);
    });
  });
});
