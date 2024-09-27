import type { Meta, StoryObj } from '@storybook/react';
import ServicesFAQ from '@/components/sections/services/services-faq';

const meta: Meta<typeof ServicesFAQ> = {
  title: 'Sections/Services/ServicesFAQ',
  component: ServicesFAQ,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ServicesFAQ>;

export const Default: Story = {};

export const WithCustomQuestions: Story = {
  args: {
    faqs: [
      {
        question: 'What is AI?',
        answer: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.',
      },
      {
        question: 'How can AI benefit my business?',
        answer: 'AI can benefit your business by automating repetitive tasks, providing data-driven insights, improving customer service, and enhancing decision-making processes.',
      },
      {
        question: 'Is AI implementation expensive?',
        answer: 'The cost of AI implementation varies depending on the scope and complexity of the project. We offer scalable solutions to fit various budgets and business sizes.',
      },
    ],
  },
};