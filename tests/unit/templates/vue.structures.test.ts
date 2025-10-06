import {
  vueCompositionApiStructure,
  nuxt3AppRouterStructure,
} from '../../../src/templates/vue.structures';

describe('Vue Templates', () => {
  describe('vueCompositionApiStructure', () => {
    it('should have correct id', () => {
      expect(vueCompositionApiStructure.id).toBe('vue-composition-api');
    });

    it('should have correct framework', () => {
      expect(vueCompositionApiStructure.framework).toBe('vue');
    });

    it('should have correct structure type', () => {
      expect(vueCompositionApiStructure.structure).toBe('composition-api');
    });

    it('should have name and description', () => {
      expect(vueCompositionApiStructure.name).toBeTruthy();
      expect(vueCompositionApiStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(vueCompositionApiStructure.directories)).toBe(true);
      expect(vueCompositionApiStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include src directory', () => {
      expect(vueCompositionApiStructure.directories).toContain('src');
    });

    it('should include components directory', () => {
      expect(vueCompositionApiStructure.directories).toContain(
        'src/components',
      );
    });

    it('should include composables directory', () => {
      expect(vueCompositionApiStructure.directories).toContain(
        'src/composables',
      );
    });

    it('should include stores directory for Pinia', () => {
      expect(vueCompositionApiStructure.directories).toContain('src/stores');
    });

    it('should include tests directory', () => {
      expect(vueCompositionApiStructure.directories).toContain('tests');
    });
  });

  describe('nuxt3AppRouterStructure', () => {
    it('should have correct id', () => {
      expect(nuxt3AppRouterStructure.id).toBe('nuxt3-app-router');
    });

    it('should have correct framework', () => {
      expect(nuxt3AppRouterStructure.framework).toBe('vue');
    });

    it('should have correct structure type', () => {
      expect(nuxt3AppRouterStructure.structure).toBe('nuxt3');
    });

    it('should have name and description', () => {
      expect(nuxt3AppRouterStructure.name).toBeTruthy();
      expect(nuxt3AppRouterStructure.description).toBeTruthy();
    });

    it('should have directories array', () => {
      expect(Array.isArray(nuxt3AppRouterStructure.directories)).toBe(true);
      expect(nuxt3AppRouterStructure.directories.length).toBeGreaterThan(0);
    });

    it('should include pages directory for routing', () => {
      expect(nuxt3AppRouterStructure.directories).toContain('pages');
    });

    it('should include server directory for SSR', () => {
      expect(nuxt3AppRouterStructure.directories).toContain('server');
    });

    it('should include server/api directory', () => {
      expect(nuxt3AppRouterStructure.directories).toContain('server/api');
    });

    it('should include layouts directory', () => {
      expect(nuxt3AppRouterStructure.directories).toContain('layouts');
    });

    it('should include middleware directory', () => {
      expect(nuxt3AppRouterStructure.directories).toContain('middleware');
    });

    it('should include composables directory', () => {
      expect(nuxt3AppRouterStructure.directories).toContain('composables');
    });
  });
});
