import { Command } from 'commander';

const program = new Command();

program
  .name('skaflow')
  .description(
    'A powerful CLI tool that generates production-ready folder structures and boilerplate code for modern JavaScript/TypeScript projects.',
  )
  .version('1.0.0');

program
  .command('create')
  .description('Create a new project from a template')
  .argument('<name>', 'project name')
  .option('-f, --framework <framework>', 'framework to use')
  .option('-s, --structure <structure>', 'project structure')
  .action((name, options) => {
    console.log(`Creating project: ${name}`);
    console.log(`Framework: ${options.framework || 'default'}`);
    console.log(`Structure: ${options.structure || 'default'}`);
  });

program
  .command('list')
  .description('List available templates')
  .action(() => {
    console.log('Available templates:');
    console.log('- React (feature-based, component-based)');
    console.log('- Next.js (app-router, pages-router)');
    console.log('- Express (layered, MVC)');
  });

program.parse();
