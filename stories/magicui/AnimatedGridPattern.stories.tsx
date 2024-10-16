import type { Meta, StoryObj } from '@storybook/react';
import { GridPattern } from '../../components/magicui/animated-grid-pattern';

const meta: Meta<typeof GridPattern> = {
  title: 'Components/MagicUI/AnimatedGridPattern',
  component: GridPattern,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    x: { control: 'number' },
    y: { control: 'number' },
    numSquares: { control: 'number' },
    className: { control: 'text' },
    maxOpacity: { control: 'number' },
    duration: { control: 'number' },
    repeatDelay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof GridPattern>;

export const Default: Story = {
  args: {
    width: 300,
    height: 300,
    numSquares: 50,
    maxOpacity: 0.5,
    duration: 4,
    repeatDelay: 0.5,
  },
};