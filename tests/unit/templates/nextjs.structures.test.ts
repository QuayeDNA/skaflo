import {
  nextjsAppRouterStructure,
  nextjsPagesRouterStructure,
} from '../../../src/templates/nextjs.structures';

describe('Next.js Templates', () => {
  describe('nextjsAppRouterStructure', () => {
    it('should have correct id', () => {
      expect(nextjsAppRouterStructure.id).toBe('nextjs-app-router');
    });

    it('should have correct framework', () => {
      expect(nextjsAppRouterStructure.framework).toBe('nextjs');
    });

    it('should have correct structure type', () => {
      expect(nextjsAppRouterStructure.structure).toBe('app-router');
    });

    it('should have name and description', () => {
      expect(nextjsAppRouterStructure.name).toBeTruthy();
      expect(nextjsAppRouterStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(nextjsAppRouterStructure.directories)).toBe(true);
      expect(nextjsAppRouterStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include src/app directory', () => {
      expect(nextjsAppRouterStructure.directories).toContain('src/app');
    });

    it('should include route groups for auth', () => {
      expect(nextjsAppRouterStructure.directories).toContain('src/app/(auth)');
    });

    it('should include route groups for dashboard', () => {
      expect(nextjsAppRouterStructure.directories).toContain(
        'src/app/(dashboard)',
      );
    });

    it('should include API routes', () => {
      expect(nextjsAppRouterStructure.directories).toContain('src/app/api');
    });

    it('should include components directory', () => {
      expect(nextjsAppRouterStructure.directories).toContain('src/components');
    });

    it('should include lib directory', () => {
      expect(nextjsAppRouterStructure.directories).toContain('src/lib');
    });
  });

  describe('nextjsPagesRouterStructure', () => {
    it('should have correct id', () => {
      expect(nextjsPagesRouterStructure.id).toBe('nextjs-pages-router');
    });

    it('should have correct framework', () => {
      expect(nextjsPagesRouterStructure.framework).toBe('nextjs');
    });

    it('should have correct structure type', () => {
      expect(nextjsPagesRouterStructure.structure).toBe('pages-router');
    });

    it('should have name and description', () => {
      expect(nextjsPagesRouterStructure.name).toBeTruthy();
      expect(nextjsPagesRouterStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(nextjsPagesRouterStructure.directories)).toBe(true);
      expect(nextjsPagesRouterStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include src/pages directory', () => {
      expect(nextjsPagesRouterStructure.directories).toContain('src/pages');
    });

    it('should include pages/api directory', () => {
      expect(nextjsPagesRouterStructure.directories).toContain('src/pages/api');
    });

    it('should include components directory', () => {
      expect(nextjsPagesRouterStructure.directories).toContain(
        'src/components',
      );
    });

    it('should include lib directory', () => {
      expect(nextjsPagesRouterStructure.directories).toContain('src/lib');
    });

    it('should include public directory', () => {
      expect(nextjsPagesRouterStructure.directories).toContain('public');
    });

    it('should include tests directory', () => {
      expect(nextjsPagesRouterStructure.directories).toContain('tests');
    });
  });
});
