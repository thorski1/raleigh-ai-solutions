import type { Meta, StoryObj } from '@storybook/react';
import ServicesList from '@/components/sections/services/services-list';

const meta: Meta<typeof ServicesList> = {
  title: 'Sections/Services/ServicesList',
  component: ServicesList,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ServicesList>;

export const Default: Story = {};