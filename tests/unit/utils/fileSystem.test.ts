import fs from 'fs-extra';
import { FileSystemUtils } from '../../../src/utils/fileSystem';

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
      (mockedFs.access as unknown as jest.Mock).mockRejectedValue(new Error('ENOENT'));

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
      (mockedFs.readFile as unknown as jest.Mock).mockResolvedValue('file content');

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
      (mockedFs.access as unknown as jest.Mock).mockRejectedValue(new Error('ENOENT'));

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
});
