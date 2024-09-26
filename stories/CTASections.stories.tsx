import type { Meta, StoryObj } from '@storybook/react';
import { CTASections } from '@/components/sections/cta-sections';

const meta: Meta<typeof CTASections> = {
  title: 'Sections/CTASections',
  component: CTASections,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CTASections>;

export const Default: Story = {};

export const WithCustomBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500">
        <Story />
      </div>
    ),
  ],
};

export const WithReducedAnimation: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="reduce-animation">
        <Story />
      </div>
    ),
  ],
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};