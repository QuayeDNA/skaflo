import fs from 'fs-extra';
import path from 'path';

export class FileSystemUtils {
  static async createDirectory(dirPath: string): Promise<void> {
    try {
      await fs.ensureDir(dirPath);
    } catch (error) {
      throw new Error(`Failed to create directory ${dirPath}: ${error}`, { cause: error });
    }
  }

  static async pathExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  static async writeFile(filePath: string, content: string): Promise<void> {
    try {
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, content, 'utf-8');
    } catch (error) {
      throw new Error(`Failed to write file ${filePath}: ${error}`, { cause: error });
    }
  }

  static async readFile(filePath: string): Promise<string> {
    try {
      return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
      throw new Error(`Failed to read file ${filePath}: ${error}`, { cause: error });
    }
  }

  static async copy(source: string, destination: string): Promise<void> {
    try {
      await fs.copy(source, destination);
    } catch (error) {
      throw new Error(`Failed to copy ${source} to ${destination}: ${error}`, { cause: error });
    }
  }

  static async remove(target: string): Promise<void> {
    try {
      await fs.remove(target);
    } catch (error) {
      throw new Error(`Failed to remove ${target}: ${error}`, { cause: error });
    }
  }

  static async checkConflicts(targetDir: string, files: string[]): Promise<string[]> {
    const conflicts: string[] = [];

    for (const file of files) {
      const filePath = path.join(targetDir, file);
      if (await this.pathExists(filePath)) {
        conflicts.push(file);
      }
    }

    return conflicts;
  }
}