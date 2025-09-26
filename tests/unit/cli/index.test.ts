import { Command } from 'commander';

jest.mock('commander', () => ({
  Command: jest.fn().mockImplementation(() => ({
    name: jest.fn().mockReturnThis(),
    description: jest.fn().mockReturnThis(),
    version: jest.fn().mockReturnThis(),
    command: jest.fn().mockReturnThis(),
    argument: jest.fn().mockReturnThis(),
    option: jest.fn().mockReturnThis(),
    action: jest.fn().mockReturnThis(),
    parse: jest.fn(),
  })),
}));

describe('CLI Index', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a command instance with correct configuration', () => {
    // Import the module to trigger the code
    require('../../../src/cli/index');

    expect(Command).toHaveBeenCalledTimes(1);
    const commandInstance = (Command as jest.Mock).mock.results[0].value;

    expect(commandInstance.name).toHaveBeenCalledWith('devforge');
    expect(commandInstance.description).toHaveBeenCalledWith(
      'A powerful CLI tool that generates production-ready folder structures and boilerplate code for modern JavaScript/TypeScript projects.'
    );
    expect(commandInstance.version).toHaveBeenCalledWith('1.0.0');
  });

  it('should configure create command', () => {
    require('../../../src/cli/index');

    const commandInstance = (Command as jest.Mock).mock.results[0].value;

    expect(commandInstance.command).toHaveBeenCalledWith('create');
    expect(commandInstance.argument).toHaveBeenCalledWith('<name>', 'project name');
    expect(commandInstance.option).toHaveBeenCalledWith('-f, --framework <framework>', 'framework to use');
    expect(commandInstance.option).toHaveBeenCalledWith('-s, --structure <structure>', 'project structure');
    expect(commandInstance.action).toHaveBeenCalled();
  });

  it('should configure list command', () => {
    require('../../../src/cli/index');

    const commandInstance = (Command as jest.Mock).mock.results[0].value;

    expect(commandInstance.command).toHaveBeenCalledWith('list');
    expect(commandInstance.description).toHaveBeenCalledWith('List available templates');
    expect(commandInstance.action).toHaveBeenCalled();
  });

  it('should call parse to start the CLI', () => {
    require('../../../src/cli/index');

    const commandInstance = (Command as jest.Mock).mock.results[0].value;

    expect(commandInstance.parse).toHaveBeenCalled();
  });
});