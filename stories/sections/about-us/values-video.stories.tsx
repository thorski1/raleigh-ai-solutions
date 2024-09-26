import type { Meta, StoryObj } from '@storybook/react';
import ValuesVideo from '../../../components/sections/about-us/values-video';

const meta: Meta<typeof ValuesVideo> = {
  title: 'Sections/About Us/ValuesVideo',
  component: ValuesVideo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ValuesVideo>;

export const Default: Story = {};
