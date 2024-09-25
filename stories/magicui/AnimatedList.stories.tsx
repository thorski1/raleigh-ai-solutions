import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedList } from '../../components/magicui/animated-list';

const meta: Meta<typeof AnimatedList> = {
  title: 'Components/MagicUI/AnimatedList',
  component: AnimatedList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
    delay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedList>;

export const Default: Story = {
  args: {
    children: [
      <div key="1">Item 1</div>,
      <div key="2">Item 2</div>,
      <div key="3">Item 3</div>,
    ],
    delay: 1000,
  },
};