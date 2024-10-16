import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/layout/footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    tags: ['autodocs'],
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};