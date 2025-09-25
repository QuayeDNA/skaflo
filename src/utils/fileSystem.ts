import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';

export class FileSystemUtils {
  /**
   * Safely create a directory, creating parent directories if needed
   */
  static async createDirectory(dirPath: string): Promise<void> {
    try {
      await fs.ensureDir(dirPath);
    } catch (error) {
      throw new Error(`Failed to create directory ${dirPath}: ${error}`);
    }
  }

  /**
   * Check if a path exists
   */
  static async pathExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Safely write a file, creating directories if needed
   */
  static async writeFile(filePath: string, content: string): Promise<void> {
    try {
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, content, 'utf-8');
    } catch (error) {
      throw new Error(`Failed to write file ${filePath}: ${error}`);
    }
  }

  /**
   * Read a file safely
   */
  static async readFile(filePath: string): Promise<string> {
    try {
      return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
      throw new Error(`Failed to read file ${filePath}: ${error}`);
    }
  }

  /**
   * Copy a file or directory
   */
  static async copy(source: string, destination: string): Promise<void> {
    try {
      await fs.copy(source, destination);
    } catch (error) {
      throw new Error(`Failed to copy ${source} to ${destination}: ${error}`);
    }
  }

  /**
   * Remove a file or directory
   */
  static async remove(target: string): Promise<void> {
    try {
      await fs.remove(target);
    } catch (error) {
      throw new Error(`Failed to remove ${target}: ${error}`);
    }
  }

  /**
   * Check for conflicts before creating files
   */
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

  /**
   * Create project structure with progress indication
   */
  static async createProjectStructure(
    targetDir: string,
    structure: Record<string, any>,
    variables: Record<string, any> = {}
  ): Promise<void> {
    const spinner = ora('Creating project structure...').start();

    try {
      for (const [relativePath, content] of Object.entries(structure)) {
        const fullPath = path.join(targetDir, relativePath);

        if (typeof content === 'string') {
          // It's a file with content
          let processedContent = content;
          // Simple variable replacement
          for (const [key, value] of Object.entries(variables)) {
            processedContent = processedContent.replace(new RegExp(`{{${key}}}`, 'g'), value);
          }
          await this.writeFile(fullPath, processedContent);
        } else if (content === null) {
          // It's a directory
          await this.createDirectory(fullPath);
        }
      }

      spinner.succeed('Project structure created successfully');
    } catch (error) {
      spinner.fail('Failed to create project structure');
      throw error;
    }
  }
}