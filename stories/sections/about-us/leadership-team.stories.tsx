import type { Meta, StoryObj } from '@storybook/react';
import LeadershipTeam from '../../../components/sections/about-us/leadership-team';

const meta: Meta<typeof LeadershipTeam> = {
  title: 'Sections/About Us/LeadershipTeam',
  component: LeadershipTeam,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LeadershipTeam>;

export const Default: Story = {};
