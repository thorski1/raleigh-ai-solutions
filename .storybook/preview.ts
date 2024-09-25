import type { Preview } from "@storybook/react";
import '../app/globals.css';
import { withReactContext } from 'storybook-react-context';
import { setProjectAnnotations } from '@storybook/react';
setProjectAnnotations({
  decorators: [withReactContext],
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
