import type { Meta, StoryObj } from '@storybook/react';
import ServicesHero from '@/components/sections/services/services-hero';

const meta: Meta<typeof ServicesHero> = {
  title: 'Sections/Services/ServicesHero',
  component: ServicesHero,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ServicesHero>;

export const Default: Story = {};