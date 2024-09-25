import type { Meta, StoryObj } from '@storybook/react';
import { WhyChooseUs } from '@/components/sections/why-choose-us';

const meta: Meta<typeof WhyChooseUs> = {
  title: 'Sections/WhyChooseUs',
    component: WhyChooseUs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof WhyChooseUs>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

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