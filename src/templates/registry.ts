import { FolderStructure } from '../types';
import {
  reactFeatureBasedStructure,
  reactComponentBasedStructure,
} from './react.structures';

export class StructureRegistry {
  private structures: Map<string, FolderStructure> = new Map();

  constructor() {
    this.registerStructure(reactFeatureBasedStructure);
    this.registerStructure(reactComponentBasedStructure);
  }

  registerStructure(structure: FolderStructure): void {
    this.structures.set(structure.id, structure);
  }

  getStructure(id: string): FolderStructure | undefined {
    return this.structures.get(id);
  }

  getStructuresByFramework(framework: string): FolderStructure[] {
    return Array.from(this.structures.values()).filter(
      (structure) => structure.framework === framework,
    );
  }

  getStructureByFrameworkAndType(
    framework: string,
    structure: string,
  ): FolderStructure | undefined {
    return Array.from(this.structures.values()).find(
      (struct) =>
        struct.framework === framework && struct.structure === structure,
    );
  }

  getAllStructures(): FolderStructure[] {
    return Array.from(this.structures.values());
  }

  getAvailableFrameworks(): string[] {
    const frameworks = new Set(
      Array.from(this.structures.values()).map(
        (structure) => structure.framework,
      ),
    );
    return Array.from(frameworks);
  }

  getAvailableStructures(framework: string): string[] {
    const structures = new Set(
      this.getStructuresByFramework(framework).map(
        (structure) => structure.structure,
      ),
    );
    return Array.from(structures);
  }

  clearStructures(): void {
    this.structures.clear();
  }
}

export const structureRegistry = new StructureRegistry();
