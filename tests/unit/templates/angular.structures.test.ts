import {
  angularStandaloneStructure,
  angularFeatureBasedStructure,
} from '../../../src/templates/angular.structures';

describe('Angular Templates', () => {
  describe('angularStandaloneStructure', () => {
    it('should have correct id', () => {
      expect(angularStandaloneStructure.id).toBe('angular-standalone');
    });

    it('should have correct framework', () => {
      expect(angularStandaloneStructure.framework).toBe('angular');
    });

    it('should have correct structure type', () => {
      expect(angularStandaloneStructure.structure).toBe('standalone');
    });

    it('should have name and description', () => {
      expect(angularStandaloneStructure.name).toBeTruthy();
      expect(angularStandaloneStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(angularStandaloneStructure.directories)).toBe(true);
      expect(angularStandaloneStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include src/app directory', () => {
      expect(angularStandaloneStructure.directories).toContain('src/app');
    });

    it('should include core directory', () => {
      expect(angularStandaloneStructure.directories).toContain('src/app/core');
    });

    it('should include shared directory', () => {
      expect(angularStandaloneStructure.directories).toContain(
        'src/app/shared',
      );
    });

    it('should include features directory', () => {
      expect(angularStandaloneStructure.directories).toContain(
        'src/app/features',
      );
    });

    it('should include core services', () => {
      expect(angularStandaloneStructure.directories).toContain(
        'src/app/core/services',
      );
    });

    it('should include core guards', () => {
      expect(angularStandaloneStructure.directories).toContain(
        'src/app/core/guards',
      );
    });

    it('should include environments directory', () => {
      expect(angularStandaloneStructure.directories).toContain(
        'src/environments',
      );
    });
  });

  describe('angularFeatureBasedStructure', () => {
    it('should have correct id', () => {
      expect(angularFeatureBasedStructure.id).toBe('angular-feature-based');
    });

    it('should have correct framework', () => {
      expect(angularFeatureBasedStructure.framework).toBe('angular');
    });

    it('should have correct structure type', () => {
      expect(angularFeatureBasedStructure.structure).toBe('feature-based');
    });

    it('should have name and description', () => {
      expect(angularFeatureBasedStructure.name).toBeTruthy();
      expect(angularFeatureBasedStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(angularFeatureBasedStructure.directories)).toBe(
        true,
      );
      expect(angularFeatureBasedStructure.directories.length).toBeGreaterThan(
        0,
      );
    });

    it('should include src/app directory', () => {
      expect(angularFeatureBasedStructure.directories).toContain('src/app');
    });

    it('should include core directory', () => {
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/core',
      );
    });

    it('should include shared directory with UI components', () => {
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/shared/components/ui',
      );
    });

    it('should include multiple feature modules', () => {
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/features/home',
      );
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/features/auth',
      );
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/features/dashboard',
      );
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/features/profile',
      );
    });

    it('should include feature models', () => {
      expect(angularFeatureBasedStructure.directories).toContain(
        'src/app/features/auth/models',
      );
    });

    it('should have more directories than standalone', () => {
      expect(angularFeatureBasedStructure.directories.length).toBeGreaterThan(
        angularStandaloneStructure.directories.length,
      );
    });
  });
});
