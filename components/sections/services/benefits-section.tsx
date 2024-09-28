import { FiCheckCircle } from "react-icons/fi";

import { Service } from "@/lib/services";

export const BenefitsSection = ({service}: {service: Service}) => {
    return (
      <div className="bg-secondary/10 py-4 md:py-8 lg:py-12 w-full px-4 md:px-8 lg:px-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-dark">Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-2xl">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}
