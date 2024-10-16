import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedSubscribeButton } from '../../components/magicui/animated-subscribe-button';

const meta: Meta<typeof AnimatedSubscribeButton> = {
  title: 'Components/MagicUI/AnimatedSubscribeButton',
  component: AnimatedSubscribeButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
    subscribeStatus: { control: 'boolean' },
    initialText: { control: 'text' },
    changeText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedSubscribeButton>;

export const Default: Story = {
  args: {
    buttonColor: '#3b82f6',
    buttonTextColor: '#ffffff',
    subscribeStatus: false,
    initialText: 'Subscribe',
    changeText: 'Subscribed',
  },
};