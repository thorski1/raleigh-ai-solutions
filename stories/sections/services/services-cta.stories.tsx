import type { Meta, StoryObj } from '@storybook/react';
import ServicesCTA from '@/components/sections/services/services-cta';

const meta: Meta<typeof ServicesCTA> = {
  title: 'Sections/Services/ServicesCTA',
  component: ServicesCTA,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ServicesCTA>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    headline: 'Start Your AI Journey Today',
    description: 'Transform your business with cutting-edge AI solutions tailored to your needs.',
    buttonText: 'Get Started Now',
  },
};