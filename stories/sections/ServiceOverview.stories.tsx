import type { Meta, StoryObj } from '@storybook/react';
import { ServiceOverview } from '@/components/sections/service-overview';

const meta: Meta<typeof ServiceOverview> = {
  title: 'Sections/ServiceOverview',
  component: ServiceOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ServiceOverview>;

export const Default: Story = {};