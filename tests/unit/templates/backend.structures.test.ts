import {
  nestjsModularStructure,
  fastifyPluginBasedStructure,
  koaMiddlewareStructure,
} from '../../../src/templates/backend.structures';

describe('Backend Templates', () => {
  describe('nestjsModularStructure', () => {
    it('should have correct id', () => {
      expect(nestjsModularStructure.id).toBe('nestjs-modular');
    });

    it('should have correct framework', () => {
      expect(nestjsModularStructure.framework).toBe('nestjs');
    });

    it('should have correct structure type', () => {
      expect(nestjsModularStructure.structure).toBe('modular');
    });

    it('should include module directories', () => {
      expect(nestjsModularStructure.directories).toContain('src/app/modules');
      expect(nestjsModularStructure.directories).toContain(
        'src/app/modules/auth/controllers',
      );
      expect(nestjsModularStructure.directories).toContain(
        'src/app/common/guards',
      );
    });
  });

  describe('fastifyPluginBasedStructure', () => {
    it('should have correct id', () => {
      expect(fastifyPluginBasedStructure.id).toBe('fastify-plugin-based');
    });

    it('should have correct framework', () => {
      expect(fastifyPluginBasedStructure.framework).toBe('fastify');
    });

    it('should have correct structure type', () => {
      expect(fastifyPluginBasedStructure.structure).toBe('plugin-based');
    });

    it('should include plugins and routes directories', () => {
      expect(fastifyPluginBasedStructure.directories).toContain('src/plugins');
      expect(fastifyPluginBasedStructure.directories).toContain('src/routes/auth');
      expect(fastifyPluginBasedStructure.directories).toContain('src/schemas/users');
    });
  });

  describe('koaMiddlewareStructure', () => {
    it('should have correct id', () => {
      expect(koaMiddlewareStructure.id).toBe('koa-middleware');
    });

    it('should have correct framework', () => {
      expect(koaMiddlewareStructure.framework).toBe('koa');
    });

    it('should have correct structure type', () => {
      expect(koaMiddlewareStructure.structure).toBe('middleware');
    });

    it('should include middleware organization directories', () => {
      expect(koaMiddlewareStructure.directories).toContain('src/middleware');
      expect(koaMiddlewareStructure.directories).toContain('src/middleware/error');
      expect(koaMiddlewareStructure.directories).toContain('src/routes/products');
    });
  });
});
