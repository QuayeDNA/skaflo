// Mock all external dependencies
jest.mock('commander', () => {
  const mockCommand = {
    name: jest.fn().mockReturnThis(),
    description: jest.fn().mockReturnThis(),
    version: jest.fn().mockReturnThis(),
    command: jest.fn().mockReturnThis(),
    argument: jest.fn().mockReturnThis(),
    option: jest.fn().mockReturnThis(),
    action: jest.fn().mockReturnThis(),
    parse: jest.fn().mockReturnThis(),
  };

  return {
    Command: jest.fn(() => mockCommand),
    __mockCommand: mockCommand, // Expose for testing
  };
});

jest.mock('chalk', () => ({
  blue: jest.fn((str) => str),
  green: jest.fn((str) => str),
  yellow: jest.fn((str) => str),
  red: jest.fn((str) => str),
  gray: jest.fn((str) => str),
  dim: jest.fn((str) => str),
}));

jest.mock('ora', () => {
  const mockSpinner = {
    start: jest.fn().mockReturnThis(),
    succeed: jest.fn(),
    fail: jest.fn(),
  };
  return jest.fn(() => mockSpinner);
});

jest.mock('../../../src/generators/folderGenerator');
jest.mock('../../../src/templates/registry');
jest.mock('../../../src/cli/prompts');

// Mock console and process
jest.spyOn(console, 'log').mockImplementation();
jest.spyOn(console, 'error').mockImplementation();
jest.spyOn(process, 'exit').mockImplementation(() => {
  throw new Error('Process exit called');
});

describe('CLI Index', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should import and initialize without errors', () => {
    expect(() => {
      require('../../../src/cli/index');
    }).not.toThrow();
  });

  it('should create a command instance', () => {
    const commandMock = require('commander');
    require('../../../src/cli/index');

    expect(commandMock.Command).toHaveBeenCalled();
  });

  it('should configure the main program', () => {
    const commandMock = require('commander');
    require('../../../src/cli/index');

    const mockInstance = commandMock.__mockCommand;
    expect(mockInstance.name).toHaveBeenCalledWith('skaflo');
    expect(mockInstance.description).toHaveBeenCalledWith(
      'A powerful CLI tool that generates project folder structures for modern JavaScript/TypeScript projects.',
    );
    expect(mockInstance.version).toHaveBeenCalledWith('1.0.0');
  });

  it('should configure create, list, and preview commands', () => {
    const commandMock = require('commander');
    require('../../../src/cli/index');

    const mockInstance = commandMock.__mockCommand;
    expect(mockInstance.command).toHaveBeenCalledWith('create');
    expect(mockInstance.command).toHaveBeenCalledWith('list');
    expect(mockInstance.command).toHaveBeenCalledWith('preview');
  });

  it('should call parse to start the CLI', () => {
    const commandMock = require('commander');
    require('../../../src/cli/index');

    const mockInstance = commandMock.__mockCommand;
    expect(mockInstance.parse).toHaveBeenCalled();
  });
});
