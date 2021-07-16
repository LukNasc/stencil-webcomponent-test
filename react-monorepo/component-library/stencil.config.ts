import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@luknasc/stencil-webcomponent-test',
      proxiesFile: '../stencil-ds-react-template/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'docs-vscode',
      file: './dist/custom-elements.json'
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

  ],
};
