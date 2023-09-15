import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: '1m0uizc8',
  dataset: 'production',
  title: 'showcase-next-sanity',
  apiVersion: '2023-09-15',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;