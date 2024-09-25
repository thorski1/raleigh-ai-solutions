import type { Meta, StoryObj } from '@storybook/react';
import AvatarCircles from '../../components/magicui/avatar-circles';

const meta: Meta<typeof AvatarCircles> = {
  title: 'Components/MagicUI/AvatarCircles',
  component: AvatarCircles,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
    numPeople: { control: 'number' },
    avatarUrls: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarCircles>;

export const Default: Story = {
  args: {
    numPeople: 5,
    avatarUrls: [
      'https://example.com/avatar1.jpg',
      'https://example.com/avatar2.jpg',
      'https://example.com/avatar3.jpg',
    ],
  },
};
