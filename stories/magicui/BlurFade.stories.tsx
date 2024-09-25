import type { Meta, StoryObj } from '@storybook/react';
import BlurFade from '../../components/magicui/blur-fade';

const meta: Meta<typeof BlurFade> = {
  title: 'Components/MagicUI/BlurFade',
  component: BlurFade,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
    duration: { control: 'number' },
    delay: { control: 'number' },
    yOffset: { control: 'number' },
    inView: { control: 'boolean' },
    inViewMargin: { control: 'text' },
    blur: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof BlurFade>;

export const Default: Story = {
  args: {
    children: <div>Blur Fade Content</div>,
    duration: 0.4,
    delay: 0,
    yOffset: 6,
    inView: false,
    inViewMargin: '-50px',
    blur: '6px',
  },
};