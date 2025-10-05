import inquirer from 'inquirer';
import { structureRegistry } from '../../templates/registry';

interface TreeNode {
  name: string;
  children: Map<string, TreeNode>;
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
  console.log(`   ${prefix}${connector}${node.name}/`);

  // Print children
  const children = Array.from(node.children.values());
  const newPrefix = prefix + (isLast ? '    ' : '│   ');

  children.forEach((child, index) => {
    const isLastChild = index === children.length - 1;
    printTree(child, newPrefix, isLastChild);
  });
}

export interface ProjectPrompts {
  framework: string;
  structure: string;
  confirm: boolean;
}

export async function promptProjectDetails(): Promise<ProjectPrompts> {
  const frameworks = structureRegistry.getAvailableFrameworks();

  // Framework selection
  const { framework } = await inquirer.prompt<{ framework: string }>({
    type: 'list',
    name: 'framework',
    message: 'Which framework would you like to use?',
    choices: frameworks.map((framework) => ({
      name: framework.charAt(0).toUpperCase() + framework.slice(1),
      value: framework,
    })),
  });

  // Structure selection based on framework
  const structures = structureRegistry.getAvailableStructures(framework);
  const { structure } = await inquirer.prompt<{ structure: string }>({
    type: 'list',
    name: 'structure',
    message: 'Which folder structure?',
    choices: structures.map((structure) => ({
      name: structure
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      value: structure,
    })),
  });

  // Show summary and confirm
  const selectedStructure = structureRegistry.getStructureByFrameworkAndType(
    framework,
    structure,
  );

  console.log('\n📋 Project Summary:');
  console.log(`   Framework: ${framework}`);
  console.log(`   Structure: ${selectedStructure?.name || structure}`);
  console.log(`   Description: ${selectedStructure?.description || 'N/A'}`);

  // Show folder preview
  if (selectedStructure?.directories) {
    console.log(
      `\n📁 Folders to be created (${selectedStructure.directories.length} total):`,
    );

    const tree = buildDirectoryTree(selectedStructure.directories);
    printTree(tree);
  }

  const { confirm } = await inquirer.prompt<{ confirm: boolean }>({
    type: 'confirm',
    name: 'confirm',
    message: 'Create project with these settings?',
    default: true,
  });

  return {
    framework,
    structure,
    confirm,
  };
}
