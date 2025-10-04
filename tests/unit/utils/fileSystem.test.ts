import fs from 'fs-extra';
import { FileSystemUtils } from '../../../src/utils/fileSystem';

jest.mock('ora', () => ({
  default: jest.fn(() => ({
    start: jest.fn().mockReturnThis(),
    succeed: jest.fn(),
    fail: jest.fn(),
  })),
}));

// Mock fs-extra
jest.mock('fs-extra', () => ({
  ensureDir: jest.fn(),
  access: jest.fn(),
  writeFile: jest.fn(),
  readFile: jest.fn(),
  copy: jest.fn(),
  remove: jest.fn(),
}));

const mockedFs = fs as jest.Mocked<typeof fs>;

describe('FileSystemUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createDirectory', () => {
    it('should create directory successfully', async () => {
      (mockedFs.ensureDir as jest.Mock).mockResolvedValue(undefined);

      await expect(
        FileSystemUtils.createDirectory('/test/path'),
      ).resolves.toBeUndefined();
      expect(mockedFs.ensureDir).toHaveBeenCalledWith('/test/path');
    });

    it('should throw error on failure', async () => {
      (mockedFs.ensureDir as jest.Mock).mockRejectedValue(
        new Error('Permission denied'),
      );

      await expect(
        FileSystemUtils.createDirectory('/test/path'),
      ).rejects.toThrow(
        'Failed to create directory /test/path: Error: Permission denied',
      );
    });
  });

  describe('pathExists', () => {
    it('should return true when path exists', async () => {
      (mockedFs.access as unknown as jest.Mock).mockResolvedValue(undefined);

      const result = await FileSystemUtils.pathExists('/existing/path');
      expect(result).toBe(true);
    });

    it('should return false when path does not exist', async () => {
      (mockedFs.access as unknown as jest.Mock).mockRejectedValue(
        new Error('ENOENT'),
      );

      const result = await FileSystemUtils.pathExists('/nonexistent/path');
      expect(result).toBe(false);
    });
  });

  describe('writeFile', () => {
    it('should write file successfully', async () => {
      (mockedFs.ensureDir as jest.Mock).mockResolvedValue(undefined);
      (mockedFs.writeFile as unknown as jest.Mock).mockResolvedValue(undefined);

      await expect(
        FileSystemUtils.writeFile('/test/file.txt', 'content'),
      ).resolves.toBeUndefined();
      expect(mockedFs.ensureDir).toHaveBeenCalledWith('/test');
      expect(mockedFs.writeFile).toHaveBeenCalledWith(
        '/test/file.txt',
        'content',
        'utf-8',
      );
    });

    it('should throw error on write failure', async () => {
      (mockedFs.ensureDir as jest.Mock).mockResolvedValue(undefined);
      (mockedFs.writeFile as unknown as jest.Mock).mockRejectedValue(
        new Error('Write failed'),
      );

      await expect(
        FileSystemUtils.writeFile('/test/file.txt', 'content'),
      ).rejects.toThrow(
        'Failed to write file /test/file.txt: Error: Write failed',
      );
    });
  });

  describe('readFile', () => {
    it('should read file successfully', async () => {
      (mockedFs.readFile as unknown as jest.Mock).mockResolvedValue(
        'file content',
      );

      const result = await FileSystemUtils.readFile('/test/file.txt');
      expect(result).toBe('file content');
      expect(mockedFs.readFile).toHaveBeenCalledWith('/test/file.txt', 'utf-8');
    });

    it('should throw error on read failure', async () => {
      (mockedFs.readFile as unknown as jest.Mock).mockRejectedValue(
        new Error('Read failed'),
      );

      await expect(FileSystemUtils.readFile('/test/file.txt')).rejects.toThrow(
        'Failed to read file /test/file.txt: Error: Read failed',
      );
    });
  });

  describe('checkConflicts', () => {
    it('should return empty array when no conflicts', async () => {
      (mockedFs.access as unknown as jest.Mock).mockRejectedValue(
        new Error('ENOENT'),
      );

      const result = await FileSystemUtils.checkConflicts('/target', [
        'file1.txt',
        'file2.txt',
      ]);
      expect(result).toEqual([]);
    });

    it('should return conflicts when files exist', async () => {
      (mockedFs.access as unknown as jest.Mock)
        .mockResolvedValueOnce(undefined) // file1.txt exists
        .mockRejectedValueOnce(new Error('ENOENT')); // file2.txt doesn't exist

      const result = await FileSystemUtils.checkConflicts('/target', [
        'file1.txt',
        'file2.txt',
      ]);
      expect(result).toEqual(['file1.txt']);
    });
  });

  describe('copy', () => {
    it('should copy file successfully', async () => {
      (mockedFs.copy as jest.Mock).mockResolvedValue(undefined);

      await expect(
        FileSystemUtils.copy('/source', '/dest'),
      ).resolves.toBeUndefined();
      expect(mockedFs.copy).toHaveBeenCalledWith('/source', '/dest');
    });

    it('should throw error on copy failure', async () => {
      (mockedFs.copy as jest.Mock).mockRejectedValue(new Error('Copy failed'));

      await expect(FileSystemUtils.copy('/source', '/dest')).rejects.toThrow(
        'Failed to copy /source to /dest: Error: Copy failed',
      );
    });
  });

  describe('remove', () => {
    it('should remove file successfully', async () => {
      (mockedFs.remove as jest.Mock).mockResolvedValue(undefined);

      await expect(
        FileSystemUtils.remove('/test/file'),
      ).resolves.toBeUndefined();
      expect(mockedFs.remove).toHaveBeenCalledWith('/test/file');
    });

    it('should throw error on remove failure', async () => {
      (mockedFs.remove as jest.Mock).mockRejectedValue(
        new Error('Remove failed'),
      );

      await expect(FileSystemUtils.remove('/test/file')).rejects.toThrow(
        'Failed to remove /test/file: Error: Remove failed',
      );
    });
  });

  describe('error handling edge cases', () => {
    it('should handle writeFile with unknown error', async () => {
      (mockedFs.ensureDir as jest.Mock).mockResolvedValue(undefined);
      (mockedFs.writeFile as unknown as jest.Mock).mockRejectedValue(
        'Unknown error',
      );

      await expect(
        FileSystemUtils.writeFile('/test/file', 'content'),
      ).rejects.toThrow('Failed to write file /test/file: Unknown error');
    });

    it('should handle readFile with unknown error', async () => {
      (mockedFs.readFile as unknown as jest.Mock).mockRejectedValue(
        'Unknown error',
      );

      await expect(FileSystemUtils.readFile('/test/file')).rejects.toThrow(
        'Failed to read file /test/file: Unknown error',
      );
    });

    it('should handle createDirectory with unknown error', async () => {
      (mockedFs.ensureDir as jest.Mock).mockRejectedValue('Unknown error');

      await expect(
        FileSystemUtils.createDirectory('/test/path'),
      ).rejects.toThrow('Failed to create directory /test/path: Unknown error');
    });

    it('should handle copy with unknown error', async () => {
      (mockedFs.copy as jest.Mock).mockRejectedValue('Unknown error');

      await expect(FileSystemUtils.copy('/source', '/dest')).rejects.toThrow(
        'Failed to copy /source to /dest: Unknown error',
      );
    });

    it('should handle remove with unknown error', async () => {
      (mockedFs.remove as jest.Mock).mockRejectedValue('Unknown error');

      await expect(FileSystemUtils.remove('/test/file')).rejects.toThrow(
        'Failed to remove /test/file: Unknown error',
      );
    });
  });
});
