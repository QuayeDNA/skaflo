import inquirer from 'inquirer';

export interface ProjectPrompts {
  framework: string;
  structure: string;
  projectName: string;
  confirm: boolean;
}

export async function promptProjectDetails(): Promise<ProjectPrompts> {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Which framework would you like to use?',
      choices: [
        { name: 'React', value: 'react' },
        { name: 'Next.js', value: 'nextjs' },
        { name: 'Express', value: 'express' },
      ],
    },
    {
      type: 'list',
      name: 'structure',
      message: 'Which project structure?',
      choices: (answers: any) => {
        switch (answers.framework) {
          case 'react':
            return [
              { name: 'Feature-based', value: 'feature-based' },
              { name: 'Component-based', value: 'component-based' },
            ];
          case 'nextjs':
            return [
              { name: 'App Router', value: 'app-router' },
              { name: 'Pages Router', value: 'pages-router' },
            ];
          case 'express':
            return [
              { name: 'Layered Architecture', value: 'layered' },
              { name: 'MVC', value: 'mvc' },
            ];
          default:
            return [];
        }
      },
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Project name cannot be empty';
        }
        return true;
      },
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Create project with these settings?',
      default: true,
    },
  ]);

  return answers;
}
