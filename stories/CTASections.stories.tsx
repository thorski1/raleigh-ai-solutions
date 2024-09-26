import type { Meta, StoryObj } from '@storybook/react';
import { CTASections } from '@/components/sections/cta-sections';

const meta: Meta<typeof CTASections> = {
  title: 'Sections/CTASections',
  component: CTASections,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CTASections>;

export const Default: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};