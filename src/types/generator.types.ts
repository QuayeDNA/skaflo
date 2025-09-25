export interface GeneratorOptions {
  template: string;
  projectName: string;
  targetDir: string;
  variables?: Record<string, any>;
}

export interface GeneratorResult {
  success: boolean;
  filesCreated: string[];
  errors?: string[];
}

export interface FileGenerator {
  generate(options: GeneratorOptions): Promise<GeneratorResult>;
}