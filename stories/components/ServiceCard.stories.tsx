import type { Meta, StoryObj } from '@storybook/react';
import { FaRobot } from 'react-icons/fa';
import { ServiceCard } from '@/components/reusables/service-card';

const meta: Meta<typeof ServiceCard> = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'object' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    icon: <FaRobot />,
    title: 'AI Integration & Automation',
    description: 'Enhance business processes with custom AI models and workflow automation tools.',
  },
};

export const LongDescription: Story = {
  args: {
    icon: <FaRobot />,
    title: 'AI Integration & Automation',
    description: 'Enhance business processes with custom AI models and workflow automation tools. This is a longer description to see how the card handles more text content.',
  },
};