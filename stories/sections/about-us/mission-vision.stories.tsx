import type { Meta, StoryObj } from '@storybook/react';
import MissionVision from '../../../components/sections/about-us/mission-vision';

const meta: Meta<typeof MissionVision> = {
  title: 'Sections/About Us/MissionVision',
  component: MissionVision,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof MissionVision>;

export const Default: Story = {};
