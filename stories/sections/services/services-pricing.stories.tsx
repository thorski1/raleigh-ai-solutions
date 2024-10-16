import type { Meta, StoryObj } from '@storybook/react';
import ServicesPricing from '@/components/sections/services/services-pricing';

const meta: Meta<typeof ServicesPricing> = {
  title: 'Sections/Services/ServicesPricing',
  component: ServicesPricing,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ServicesPricing>;

export const Default: Story = {};