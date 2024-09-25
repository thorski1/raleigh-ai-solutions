import type { Meta, StoryObj } from '@storybook/react';
import AnimatedGradientText from '../../components/magicui/animated-gradient-text';

const meta: Meta<typeof AnimatedGradientText> = {
  title: 'Components/MagicUI/AnimatedGradientText',
  component: AnimatedGradientText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedGradientText>;

export const Default: Story = {
  args: {
    children: 'Animated Gradient Text',
  },
};