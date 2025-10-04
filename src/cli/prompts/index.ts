import inquirer from 'inquirer';
import { structureRegistry } from '../../templates/registry';

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