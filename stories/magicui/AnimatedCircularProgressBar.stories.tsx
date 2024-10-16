import type { Meta, StoryObj } from '@storybook/react';
import AnimatedCircularProgressBar from '../../components/magicui/animated-circular-progress-bar';

const meta: Meta<typeof AnimatedCircularProgressBar> = {
  title: 'Components/MagicUI/AnimatedCircularProgressBar',
  component: AnimatedCircularProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    max: { control: 'number' },
    value: { control: 'number' },
    min: { control: 'number' },
    gaugePrimaryColor: { control: 'color' },
    gaugeSecondaryColor: { control: 'color' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedCircularProgressBar>;

export const Default: Story = {
  args: {
    max: 100,
    value: 75,
    min: 0,
    gaugePrimaryColor: '#3b82f6',
    gaugeSecondaryColor: '#e5e7eb',
  },
};