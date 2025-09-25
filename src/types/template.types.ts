export interface Template {
  name: string;
  description: string;
  framework: string;
  structure: string;
  dependencies: string[];
  devDependencies: string[];
  files: TemplateFile[];
}

export interface TemplateFile {
  path: string;
  content: string;
  template?: boolean;
}

export interface TemplateDefinition {
  [key: string]: Template;
}