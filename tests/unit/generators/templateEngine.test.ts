import { FolderStructureEngine } from '../../../src/generators/templateEngine';
import { FolderStructure, GenerationOptions } from '../../../src/types';
import * as fs from 'fs';
import { join } from 'path';
import * as os from 'os';

describe('FolderStructureEngine', () => {
  let engine: FolderStructureEngine;
  let tempDir: string;
  let mockStructure: FolderStructure;
  let mockOptions: GenerationOptions;

  beforeEach(async () => {
    engine = new FolderStructureEngine();
    tempDir = await fs.promises.mkdtemp(join(os.tmpdir(), 'skaflow-test-'));
    
    mockStructure = {
      id: 'test-structure',
      name: 'Test Structure',
      description: 'Test folder structure',
      framework: 'react',
      structure: 'feature-based',
      directories: [
        'src',
        'src/components',
        'src/features',
        'src/features/auth',
        'src/features/home',
        'public',
        'tests',
      ],
    };

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
    test('should create all specified directories', async () => {
      const result = await engine.generateFolders(mockStructure, mockOptions);

      expect(result).toHaveLength(mockStructure.directories.length + 1); // +1 for project root

      // Check that all directories were created
      for (const dir of mockStructure.directories) {
        const fullPath = join(tempDir, 'test-project', dir);
        expect(fs.existsSync(fullPath)).toBe(true);
        expect((await fs.promises.stat(fullPath)).isDirectory()).toBe(true);
      }
    });

    test('should create project root directory', async () => {
      await engine.generateFolders(mockStructure, mockOptions);

      const projectPath = join(tempDir, 'test-project');
      expect(fs.existsSync(projectPath)).toBe(true);
      expect((await fs.promises.stat(projectPath)).isDirectory()).toBe(true);
    });

    test('should return list of created directories', async () => {
      const result = await engine.generateFolders(mockStructure, mockOptions);

      expect(result).toContain(join(tempDir, 'test-project'));
      expect(result).toContain(join(tempDir, 'test-project', 'src'));
      expect(result).toContain(join(tempDir, 'test-project', 'src', 'components'));
      expect(result).toContain(join(tempDir, 'test-project', 'src', 'features'));
    });

    test('should handle nested directory structures', async () => {
      const nestedStructure: FolderStructure = {
        id: 'nested-test',
        name: 'Nested Test',
        description: 'Test nested folders',
        framework: 'react',
        structure: 'feature-based',
        directories: [
          'src',
          'src/features',
          'src/features/auth',
          'src/features/auth/components',
          'src/features/auth/hooks',
          'src/features/auth/types',
        ],
      };

      await engine.generateFolders(nestedStructure, mockOptions);

      const deepPath = join(tempDir, 'test-project', 'src', 'features', 'auth', 'types');
      expect(fs.existsSync(deepPath)).toBe(true);
      expect((await fs.promises.stat(deepPath)).isDirectory()).toBe(true);
    });

    test('should handle empty directory list', async () => {
      const emptyStructure: FolderStructure = {
        id: 'empty-test',
        name: 'Empty Test',
        description: 'Test empty structure',
        framework: 'react',
        structure: 'feature-based',
        directories: [],
      };

      const result = await engine.generateFolders(emptyStructure, mockOptions);

      expect(result).toHaveLength(1); // Only project root
      expect(result[0]).toBe(join(tempDir, 'test-project'));
    });
  });
});