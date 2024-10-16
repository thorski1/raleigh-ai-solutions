import type { Meta, StoryObj } from '@storybook/react';
import AnimatedShinyText from '../../components/magicui/animated-shiny-text';

const meta: Meta<typeof AnimatedShinyText> = {
  title: 'Components/MagicUI/AnimatedShinyText',
  component: AnimatedShinyText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
    shimmerWidth: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedShinyText>;

export const Default: Story = {
  args: {
    children: 'Shiny Text',
    shimmerWidth: 100,
  },
};