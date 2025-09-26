export interface CLICommand {
  name: string;
  description: string;
  action: (options: CLIOptions) => void;
}

export interface CLIOptions {
  framework?: string;
  structure?: string;
  name?: string;
  [key: string]: unknown;
}

export interface PromptAnswer {
  framework: string;
  structure: string;
  projectName: string;
  confirm: boolean;
  [key: string]: unknown;
}
