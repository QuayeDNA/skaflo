import { GenerationOptions } from './template.types';

export interface GeneratorOptions {
  structure: string;
  projectName: string;
  targetDir: string;
}

export interface GeneratorResult {
  success: boolean;
  directoriesCreated: string[];
  errors?: string[];
  warnings?: string[];
}

export interface FolderGenerator {
  generate(options: GenerationOptions): Promise<GeneratorResult>;
}
