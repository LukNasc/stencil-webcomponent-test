import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
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
