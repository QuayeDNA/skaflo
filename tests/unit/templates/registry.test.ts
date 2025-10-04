import { StructureRegistry } from '../../../src/templates/registry';
import { FolderStructure } from '../../../src/types';

describe('StructureRegistry', () => {
  let registry: StructureRegistry;
  let cleanRegistry: StructureRegistry;

  const mockStructure: FolderStructure = {
    id: 'test-structure',
    name: 'Test Structure',
    description: 'A test folder structure',
    framework: 'test',
    structure: 'basic',
    directories: [
      'src',
      'src/components',
      'tests',
    ],
  };

  beforeEach(() => {
    // Clean registry for isolated tests
    cleanRegistry = new StructureRegistry();
    cleanRegistry.clearStructures();

    // Registry with pre-registered structures for integration tests
    registry = new StructureRegistry();
  });

  describe('registerStructure', () => {
    test('should register a structure successfully', () => {
      cleanRegistry.registerStructure(mockStructure);
      const retrieved = cleanRegistry.getStructure('test-structure');
      expect(retrieved).toEqual(mockStructure);
    });

    test('should overwrite existing structure with same id', () => {
      cleanRegistry.registerStructure(mockStructure);

      const updatedStructure = { ...mockStructure, name: 'Updated Structure' };
      cleanRegistry.registerStructure(updatedStructure);

      const retrieved = cleanRegistry.getStructure('test-structure');
      expect(retrieved?.name).toBe('Updated Structure');
    });
  });

  describe('getStructure', () => {
    test('should return structure by id', () => {
      cleanRegistry.registerStructure(mockStructure);
      const retrieved = cleanRegistry.getStructure('test-structure');
      expect(retrieved).toEqual(mockStructure);
    });

    test('should return undefined for non-existent structure', () => {
      const retrieved = cleanRegistry.getStructure('non-existent');
      expect(retrieved).toBeUndefined();
    });
  });

  describe('getStructuresByFramework', () => {
    test('should return structures for specific framework', () => {
      const reactStructure = { ...mockStructure, id: 'react-basic', framework: 'react' };
      const vueStructure = { ...mockStructure, id: 'vue-basic', framework: 'vue' };

      cleanRegistry.registerStructure(reactStructure);
      cleanRegistry.registerStructure(vueStructure);

      const reactStructures = cleanRegistry.getStructuresByFramework('react');
      expect(reactStructures).toHaveLength(1);
      expect(reactStructures[0].framework).toBe('react');
    });

    test('should return empty array for non-existent framework', () => {
      const structures = cleanRegistry.getStructuresByFramework('non-existent');
      expect(structures).toHaveLength(0);
    });
  });

  describe('getStructureByFrameworkAndType', () => {
    test('should return structure by framework and structure type', () => {
      cleanRegistry.registerStructure(mockStructure);
      const retrieved = cleanRegistry.getStructureByFrameworkAndType('test', 'basic');
      expect(retrieved).toEqual(mockStructure);
    });

    test('should return undefined for non-matching criteria', () => {
      cleanRegistry.registerStructure(mockStructure);
      const retrieved = cleanRegistry.getStructureByFrameworkAndType('test', 'advanced');
      expect(retrieved).toBeUndefined();
    });
  });

  describe('getAllStructures', () => {
    test('should return all registered structures', () => {
      const structure1 = { ...mockStructure, id: 'structure1' };
      const structure2 = { ...mockStructure, id: 'structure2' };

      cleanRegistry.registerStructure(structure1);
      cleanRegistry.registerStructure(structure2);

      const allStructures = cleanRegistry.getAllStructures();
      expect(allStructures).toHaveLength(2);
    });

    test('should return empty array when no structures registered', () => {
      const allStructures = cleanRegistry.getAllStructures();
      expect(allStructures).toHaveLength(0);
    });
  });

  describe('getAvailableFrameworks', () => {
    test('should return unique frameworks', () => {
      const reactStructure1 = { ...mockStructure, id: 'react1', framework: 'react' };
      const reactStructure2 = { ...mockStructure, id: 'react2', framework: 'react' };
      const vueStructure = { ...mockStructure, id: 'vue1', framework: 'vue' };

      cleanRegistry.registerStructure(reactStructure1);
      cleanRegistry.registerStructure(reactStructure2);
      cleanRegistry.registerStructure(vueStructure);

      const frameworks = cleanRegistry.getAvailableFrameworks();
      expect(frameworks).toHaveLength(2);
      expect(frameworks).toContain('react');
      expect(frameworks).toContain('vue');
    });

    test('should return empty array when no structures registered', () => {
      const frameworks = cleanRegistry.getAvailableFrameworks();
      expect(frameworks).toHaveLength(0);
    });
  });

  describe('getAvailableStructures', () => {
    test('should return structure types for specific framework', () => {
      const basicReact = { ...mockStructure, framework: 'react', structure: 'basic' };
      const advancedReact = { ...mockStructure, id: 'react-advanced', framework: 'react', structure: 'advanced' };
      const basicVue = { ...mockStructure, id: 'vue-basic', framework: 'vue', structure: 'basic' };

      cleanRegistry.registerStructure(basicReact);
      cleanRegistry.registerStructure(advancedReact);
      cleanRegistry.registerStructure(basicVue);

      const reactStructures = cleanRegistry.getAvailableStructures('react');
      expect(reactStructures).toHaveLength(2);
      expect(reactStructures).toContain('basic');
      expect(reactStructures).toContain('advanced');
    });

    test('should return empty array for non-existent framework', () => {
      const structures = cleanRegistry.getAvailableStructures('non-existent');
      expect(structures).toHaveLength(0);
    });
  });

  describe('clearStructures', () => {
    test('should clear all registered structures', () => {
      cleanRegistry.registerStructure(mockStructure);
      expect(cleanRegistry.getAllStructures()).toHaveLength(1);

      cleanRegistry.clearStructures();
      expect(cleanRegistry.getAllStructures()).toHaveLength(0);
    });
  });

  describe('pre-registered structures', () => {
    test('should have React structures registered by default', () => {
      const reactStructures = registry.getStructuresByFramework('react');
      expect(reactStructures.length).toBeGreaterThan(0);
    });

    test('should have feature-based React structure', () => {
      const structure = registry.getStructureByFrameworkAndType('react', 'feature-based');
      expect(structure).toBeDefined();
      expect(structure?.name).toContain('Feature-Based');
    });

    test('should have component-based React structure', () => {
      const structure = registry.getStructureByFrameworkAndType('react', 'component-based');
      expect(structure).toBeDefined();
      expect(structure?.name).toContain('Component-Based');
    });
  });
});