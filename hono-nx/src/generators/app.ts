import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  offsetFromRoot,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { AppGeneratorSchema } from './schema';

export async function appGenerator(tree: Tree, options: AppGeneratorSchema) {
  // Throw error if name is not provided
  if (!options.name) {
    throw new Error('Name is required');
  }

  //
  // By default we create apps under the `apps/` directory.
  const projectRoot = options.directory
    ? `${options.directory}/${options.name}`
    : `apps/${options.name}`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: joinPathFragments(projectRoot, 'src'),
    targets: {
      build: {
        executor: 'nx:run-commands',
        options: {
          command: 'npm run build',
          cwd: joinPathFragments(projectRoot),
        },
      },
      serve: {
        executor: 'nx:run-commands',
        options: {
          command: 'npm run dev',
          cwd: joinPathFragments(projectRoot),
        },
      },
      start: {
        executor: 'nx:run-commands',
        options: {
          command: 'npm run start',
          cwd: joinPathFragments(projectRoot),
        },
      },
    },
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    offsetFromRoot: offsetFromRoot(projectRoot),
    name: options.name,
    port: options.port ?? 3000,
    tmpl: '',
  });

  //
  // Ensure tooling or dev dependencies are added to the root package.json
  addDependenciesToPackageJson(
    tree,
    {},
    {
      typescript: '^5.8.3',
      tsx: '^4.7.1',
      '@types/node': '^20.11.17',
    }
  );

  await formatFiles(tree);
}

export default appGenerator;
