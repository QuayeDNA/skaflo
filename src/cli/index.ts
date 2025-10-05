import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { promptProjectDetails } from './prompts';
import { folderGenerator } from '../generators/folderGenerator';
import { structureRegistry } from '../templates/registry';
import { GenerationOptions } from '../types/template.types';
import { readFileSync } from 'fs';
import { join } from 'path';

// Read version from package.json
const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../../package.json'), 'utf-8'),
);

// ASCII Art for Skaflo
const SKAFLO_ASCII =
  chalk.cyan(`
   ███████╗██╗  ██╗ █████╗ ███████╗██╗      ██████╗ 
   ██╔════╝██║ ██╔╝██╔══██╗██╔════╝██║     ██╔═══██╗
   ███████╗█████╔╝ ███████║█████╗  ██║     ██║   ██║
   ╚════██║██╔═██╗ ██╔══██║██╔══╝  ██║     ██║   ██║
   ███████║██║  ██╗██║  ██║██║     ███████╗╚██████╔╝
   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝ 
`) + chalk.gray(`                           v${packageJson.version}`);

interface TreeNode {
  name: string;
  children: Map<string, TreeNode>;
}

interface CreateCommandOptions {
  framework?: string;
  structure?: string;
  output?: string;
}

function buildDirectoryTree(directories: string[]): TreeNode {
  const root: TreeNode = { name: '', children: new Map() };

  directories.forEach((dir) => {
    const parts = dir.split('/');
    let current = root;

    parts.forEach((part) => {
      if (!current.children.has(part)) {
        current.children.set(part, { name: part, children: new Map() });
      }
      current = current.children.get(part)!;
    });
  });

  return root;
}

function printTree(
  node: TreeNode,
  prefix: string = '',
  isLast: boolean = true,
): void {
  if (node.name === '') {
    // Root node, print children
    const children = Array.from(node.children.values());
    children.forEach((child, index) => {
      const isLastChild = index === children.length - 1;
      printTree(child, '', isLastChild);
    });
    return;
  }

  // Print current node
  const connector = isLast ? '└── ' : '├── ';
  console.log(chalk.gray(`${prefix}${connector}${node.name}/`));

  // Print children
  const children = Array.from(node.children.values());
  const newPrefix = prefix + (isLast ? '    ' : '│   ');

  children.forEach((child, index) => {
    const isLastChild = index === children.length - 1;
    printTree(child, newPrefix, isLastChild);
  });
}

const program = new Command();

program
  .name('skaflo')
  .description(
    'A powerful CLI tool that generates project folder structures for modern JavaScript/TypeScript projects.',
  )
  .version(packageJson.version)
  .action(() => {
    console.log(SKAFLO_ASCII);
    program.help();
  });

program
  .command('create')
  .description('Create a new project folder structure')
  .argument(
    '[name]',
    'project name (optional - scaffolds into current directory if not provided)',
  )
  .option('-f, --framework <framework>', 'framework to use (react)')
  .option('-s, --structure <structure>', 'project structure')
  .option('-o, --output <output>', 'output directory', process.cwd())
  .action(async (name: string | undefined, options: CreateCommandOptions) => {
    try {
      // Display ASCII art
      console.log(SKAFLO_ASCII);
      let generationOptions: GenerationOptions;

      // Determine project name and output path based on whether name was provided
      const outputPath = options.output || process.cwd();
      const projectName = name || '__current_directory__';

      if (options.framework && options.structure) {
        generationOptions = {
          projectName,
          framework: options.framework,
          structure: options.structure,
          outputPath,
        };
      } else {
        console.log(
          chalk.blue(
            name
              ? "🚀 Welcome to Skaflo! Let's create your project structure.\n"
              : "🚀 Welcome to Skaflo! Let's scaffold your current directory.\n",
          ),
        );

        const answers = await promptProjectDetails();

        if (!answers.confirm) {
          console.log(chalk.yellow('Project creation cancelled.'));
          process.exit(0);
        }

        generationOptions = {
          projectName,
          framework: answers.framework,
          structure: answers.structure,
          outputPath,
        };
      }

      const spinner = ora('🏗️  Generating your project structure...').start();

      const result = await folderGenerator.generateFolders(generationOptions);

      if (result.success) {
        spinner.succeed(
          chalk.green('🎉 Project structure created successfully!'),
        );

        console.log(chalk.blue('\n📂 Directories created:'));
        result.directoriesCreated.forEach((dir: string) => {
          console.log(chalk.gray(`  ✓ ${dir}`));
        });

        console.log(
          chalk.green('\n🎉 Project structure created successfully!'),
        );
        console.log(chalk.blue('\nNext steps:'));
        if (generationOptions.projectName === '__current_directory__') {
          console.log(
            chalk.gray("  # You're already in your project directory!"),
          );
          console.log(chalk.gray('  # Add your files and start coding!'));
        } else {
          console.log(chalk.gray(`  cd ${generationOptions.projectName}`));
          console.log(chalk.gray('  # Add your files and start coding!'));
        }
      } else {
        spinner.fail(chalk.red('Project generation failed!'));

        if (result.errors && result.errors.length > 0) {
          console.log(chalk.red('\nErrors:'));
          result.errors.forEach((error: string) => {
            console.log(chalk.red(`  ✗ ${error}`));
          });
        }

        process.exit(1);
      }
    } catch (error) {
      console.error(chalk.red('An unexpected error occurred:'), error);
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List available folder structures')
  .action(() => {
    console.log(chalk.blue('📋 Available folder structures:\n'));

    const frameworks = structureRegistry.getAvailableFrameworks();

    frameworks.forEach((framework) => {
      console.log(
        chalk.cyan(
          `🏗️  ${framework.charAt(0).toUpperCase() + framework.slice(1)}:`,
        ),
      );
      const frameworkStructures =
        structureRegistry.getStructuresByFramework(framework);
      frameworkStructures.forEach((structure) => {
        console.log(chalk.green(`  ✓ ${structure.name}`));
        console.log(
          chalk.gray(`    ${structure.structure} • ${structure.description}`),
        );
      });
      console.log();
    });
  });

program
  .command('preview')
  .description('Preview folder structure')
  .option('-f, --framework <framework>', 'framework to preview')
  .option('-s, --structure <structure>', 'structure to preview')
  .action(async (options: { framework?: string; structure?: string }) => {
    if (!options.framework || !options.structure) {
      console.log(chalk.yellow('Please specify both framework and structure:'));
      console.log(
        chalk.gray(
          '  skaflo preview --framework react --structure feature-based',
        ),
      );
      return;
    }

    const structure = structureRegistry.getStructureByFrameworkAndType(
      options.framework,
      options.structure,
    );

    if (!structure) {
      console.log(
        chalk.red(
          `Structure not found for ${options.framework} with ${options.structure} structure`,
        ),
      );
      return;
    }

    console.log(chalk.blue(`📁 ${structure.name} folder structure preview:\n`));

    const tree = buildDirectoryTree(structure.directories);
    printTree(tree);
  });

program.parse();
