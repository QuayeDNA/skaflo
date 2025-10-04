import { join } from 'path';
import { GenerationOptions } from '../types';
import { structureRegistry } from '../templates/registry';
import { structureEngine } from './templateEngine';
import {
  validateProjectName,
  directoryExists,
  isDirectoryEmpty,
} from '../utils/validation';

export interface FolderGeneratorResult {
  success: boolean;
  directoriesCreated: string[];
  errors: string[];
  warnings: string[];
}

export interface FolderGenerator {
  generateFolders(options: GenerationOptions): Promise<FolderGeneratorResult>;
}

export class ProjectFolderGenerator implements FolderGenerator {
  constructor() {}

  async generateFolders(
    options: GenerationOptions,
  ): Promise<FolderGeneratorResult> {
    const result: FolderGeneratorResult = {
      success: false,
      directoriesCreated: [],
      errors: [],
      warnings: [],
    };

    try {
      if (!this.validateProjectName(options.projectName)) {
        result.errors.push(`Invalid project name: ${options.projectName}`);
        return result;
      }

      if (!this.validateTargetDirectory(options.outputPath)) {
        result.errors.push(`Invalid target directory: ${options.outputPath}`);
        return result;
      }

      const structure = structureRegistry.getStructureByFrameworkAndType(
        options.framework,
        options.structure,
      );

      if (!structure) {
        result.errors.push(
          `Structure not found for framework: ${options.framework}, structure: ${options.structure}`,
        );
        return result;
      }

      const projectPath = join(options.outputPath, options.projectName);
      if (
        (await directoryExists(projectPath)) &&
        !(await isDirectoryEmpty(projectPath))
      ) {
        result.errors.push(
          `Directory ${projectPath} already exists and is not empty`,
        );
        return result;
      }

      const createdDirectories = await structureEngine.generateFolders(
        structure,
        options,
      );

      result.directoriesCreated = createdDirectories;
      result.success = true;

      return result;
    } catch (error) {
      result.errors.push(
        `Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return result;
    }
  }

  private validateProjectName(name: string): boolean {
    try {
      return validateProjectName(name);
    } catch {
      return false;
    }
  }

  private validateTargetDirectory(path: string): boolean {
    try {
      return directoryExists(path);
    } catch {
      return false;
    }
  }
}

export const folderGenerator = new ProjectFolderGenerator();
