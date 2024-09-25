import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/layout/header';
import { within } from '@storybook/testing-library';
import { userEvent } from '@storybook/test';

const meta: Meta<typeof Header> = {
  title: 'Components/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const MobileMenuOpen: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: /open menu/i });
    await userEvent.click(menuButton);
  },
};