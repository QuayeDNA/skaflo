import { FolderStructure } from '../types';
import {
  reactFeatureBasedStructure,
  reactComponentBasedStructure,
  reactAtomicDesignStructure,
  reactMonorepoStructure,
} from './react.structures';
import {
  vueCompositionApiStructure,
  nuxt3AppRouterStructure,
  vueOptionsApiStructure,
  vueFeatureBasedStructure,
} from './vue.structures';
import {
  nextjsAppRouterStructure,
  nextjsPagesRouterStructure,
  nextjsFeatureBasedStructure,
  nextjsMonorepoStructure,
} from './nextjs.structures';
import {
  angularStandaloneStructure,
  angularFeatureBasedStructure,
  angularModuleBasedStructure,
} from './angular.structures';
import {
  expressLayeredStructure,
  expressMvcStructure,
  expressFeatureBasedStructure,
} from './express.structures';

export class StructureRegistry {
  private structures: Map<string, FolderStructure> = new Map();

  constructor() {
    // React templates
    this.registerStructure(reactFeatureBasedStructure);
    this.registerStructure(reactComponentBasedStructure);
    this.registerStructure(reactAtomicDesignStructure);
    this.registerStructure(reactMonorepoStructure);

    // Vue templates
    this.registerStructure(vueCompositionApiStructure);
    this.registerStructure(nuxt3AppRouterStructure);
    this.registerStructure(vueOptionsApiStructure);
    this.registerStructure(vueFeatureBasedStructure);

    // Next.js templates
    this.registerStructure(nextjsAppRouterStructure);
    this.registerStructure(nextjsPagesRouterStructure);
    this.registerStructure(nextjsFeatureBasedStructure);
    this.registerStructure(nextjsMonorepoStructure);

    // Angular templates
    this.registerStructure(angularStandaloneStructure);
    this.registerStructure(angularFeatureBasedStructure);
    this.registerStructure(angularModuleBasedStructure);

    // Express templates
    this.registerStructure(expressLayeredStructure);
    this.registerStructure(expressMvcStructure);
    this.registerStructure(expressFeatureBasedStructure);
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
