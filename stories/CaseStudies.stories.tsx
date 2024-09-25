import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { CaseStudies } from '@/components/sections/case-studies';

const meta: Meta<typeof CaseStudies> = {
  title: 'Sections/CaseStudies',
  component: CaseStudies,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CaseStudies>;

export const Default: Story = {};