import { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/experimental-nextjs-vite',
  stories: ['../stories/*.mdx', '../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  // Add Vite-specific configurations here if needed
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        {
          name: 'storybook-vitest-plugin',
          config: () => ({
            test: {
              globals: true,
              environment: 'jsdom',
              include: ['**/*.stories.@(js|jsx|ts|tsx)'],
            },
          }),
        },
      ],
    });
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
