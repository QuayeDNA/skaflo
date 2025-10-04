import { FolderStructure, GenerationOptions } from '../types';
import { FileSystemUtils } from '../utils/fileSystem';
import { join } from 'path';

export interface StructureEngine {
  generateFolders(
    structure: FolderStructure,
    options: GenerationOptions,
  ): Promise<string[]>;
}

export class FolderStructureEngine implements StructureEngine {
  async generateFolders(
    structure: FolderStructure,
    options: GenerationOptions,
  ): Promise<string[]> {
    const { projectName, outputPath } = options;
    const projectPath = join(outputPath, projectName);
    const createdDirectories: string[] = [];

    // Create the project root directory
    await FileSystemUtils.createDirectory(projectPath);
    createdDirectories.push(projectPath);

    // Create all specified directories
    for (const directory of structure.directories) {
      const fullPath = join(projectPath, directory);
      await FileSystemUtils.createDirectory(fullPath);
      createdDirectories.push(fullPath);
    }

    return createdDirectories;
  }
}

export const structureEngine = new FolderStructureEngine();
