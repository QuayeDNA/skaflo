export interface FolderStructure {
  id: string;
  name: string;
  description: string;
  framework: string;
  structure: string;
  directories: string[];
}

export interface GenerationOptions {
  projectName: string;
  framework: string;
  structure: string;
  outputPath: string;
}

export interface StructureDefinition {
  [key: string]: FolderStructure;
}
