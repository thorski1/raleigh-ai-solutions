import type { Meta, StoryObj } from '@storybook/react';
import WhyChooseUs from '../../../components/sections/about-us/why-choose-us';

const meta: Meta<typeof WhyChooseUs> = {
  title: 'Sections/About Us/WhyChooseUs',
  component: WhyChooseUs,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof WhyChooseUs>;

export const Default: Story = {};
