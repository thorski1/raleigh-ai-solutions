import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../components/reusables/hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Reusables/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    tags: ['autodocs'],
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};