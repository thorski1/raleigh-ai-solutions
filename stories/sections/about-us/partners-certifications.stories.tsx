import type { Meta, StoryObj } from '@storybook/react';
import PartnersCertifications from '../../../components/sections/about-us/partners-certifications';

const meta: Meta<typeof PartnersCertifications> = {
  title: 'Sections/About Us/PartnersCertifications',
  component: PartnersCertifications,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PartnersCertifications>;

export const Default: Story = {};
