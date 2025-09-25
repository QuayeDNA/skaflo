export interface CLICommand {
  name: string;
  description: string;
  action: (options: any) => void;
}

export interface CLIOptions {
  framework?: string;
  structure?: string;
  name?: string;
  [key: string]: any;
}

export interface PromptAnswer {
  framework: string;
  structure: string;
  projectName: string;
  [key: string]: any;
}
