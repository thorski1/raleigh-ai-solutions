import type { Meta, StoryObj } from '@storybook/react';
import { BentoGrid, BentoCard } from '../../components/magicui/bento-grid';

const meta: Meta<typeof BentoGrid> = {
  title: 'Components/MagicUI/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof BentoGrid>;

export const Default: Story = {
  args: {
    children: [
      <BentoCard
        key="1"
        name="Card 1"
        className="col-span-2"
        background={<div>Background 1</div>}
        Icon={() => <div>Icon 1</div>}
        description="Description 1"
        href="#"
        cta="Learn More"
      />,
      <BentoCard
        key="2"
        name="Card 2"
        className="col-span-1"
        background={<div>Background 2</div>}
        Icon={() => <div>Icon 2</div>}
        description="Description 2"
        href="#"
        cta="Learn More"
      />,
    ],
  },
};