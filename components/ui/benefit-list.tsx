import { CheckCircle2 } from 'lucide-react';

interface BenefitListProps {
  benefits: string[];
}

export function BenefitList({ benefits }: BenefitListProps) {
  return (
    <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 my-8">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center space-x-2">
          <CheckCircle2 className="h-6 w-6 text-secondary" />
          <span className="text-primary-dark">{benefit}</span>
        </li>
      ))}
    </ul>
  );
}