interface Solution {
  title: string;
  shortDescription: string;
  benefits: string[];
  contentHeader: string;
  content: string[];
}

export const solutionsData: Record<string, Solution> = {
  'automated-workflows-ai-integration-services': {
    title: 'Automated Workflows with AI Integration Services',
    shortDescription:
      'Achieve up to a 40% efficiency increase by automating your business workflows with AI-driven solutions from Raleigh AI Solutions.',
    benefits: [
      '40% efficiency improvement',
      'Reduction in manual errors',
      'Faster workflow execution',
    ],
    contentHeader: 'Automated Workflows with AI Integration Services',
    content: [
      'Raleigh AI Solutions offers cutting-edge AI integration services that streamline and automate your business workflows, resulting in significant time and cost savings. Our custom AI-driven solutions are designed to simplify complex processes, reduce manual effort, and eliminate bottlenecks, leading to up to a 40% increase in operational efficiency.',
      'Whether you\'re managing inventory, customer service, or internal communications, our automation services ensure that tasks are completed faster, with fewer errors. Our tailored AI models analyze your current workflow, identify inefficiencies, and create automated solutions that grow with your business, driving long-term success.',
      'Efficiency is key to staying competitive in today\'s fast-paced business environment. Automating workflows with AI reduces manual labor, minimizes errors, and improves overall productivity. Choosing Raleigh AI Solutions means your business will benefit from innovative AI technologies that create streamlined processes and measurable results.',
    ],
  },
  'data-driven-insights': {
    title: 'Data-Driven Insights Through AI-Powered Data Analytics',
    shortDescription:
      'Improve decision-making by 25% with AI-powered data analytics solutions from Raleigh AI Solutions.',
    benefits: [
      '25% improvement in decision-making',
      'Real-time data insights',
      'Custom dashboards for easy data visualization',
    ],
    contentHeader: "Data-Driven Insights Through AI-Powered Data Analytics",
    content: [
      'At Raleigh AI Solutions, we provide AI-powered data analytics services that deliver actionable insights to help businesses make smarter, data-driven decisions. Our advanced AI tools analyze vast amounts of data in real time, revealing trends, patterns, and opportunities that might otherwise be missed.',
      'By transforming raw data into meaningful information, we empower your team to make better decisions, leading to a 25% improvement in decision-making processes. From forecasting market trends to optimizing internal operations, our data analytics solutions give you the competitive edge needed to thrive in a data-driven world.',
      'In today\'s fast-moving business landscape, data-driven decision-making is critical to success. AI-powered analytics enhance your ability to predict outcomes, identify new opportunities, and reduce risks. By choosing Raleigh AI Solutions, you\'re choosing a partner that leverages cutting-edge AI technology to provide deeper insights, leading to more informed and strategic business decisions.',
    ],
  },
  'reduced-costs-business-process-automation': {
    title: 'Reduced Costs Through Business Process Automation',
    shortDescription:
      'Achieve up to 30% cost reduction by automating your business processes with Raleigh AI Solutions.',
    benefits: ['30% cost reduction', 'Automated workflows', 'Reduced reliance on manual labor'],
    contentHeader: 'Reduced Costs Through Business Process Automation',
    content: [
      'Raleigh AI Solutions helps businesses reduce costs by automating time-consuming, manual processes. Our business process automation services are designed to streamline your operations, eliminate inefficiencies, and minimize the need for manual labor, leading to a 30% reduction in operational costs.',
      'From administrative tasks to customer service workflows, our tailored automation solutions ensure that your business runs smoother, faster, and more efficiently. By implementing AI-driven automation tools, you can cut costs without compromising quality or productivity, allowing you to focus on growing your business.',
      'Reducing operational costs is essential for staying competitive, and business process automation is one of the most effective ways to achieve this. By automating repetitive tasks, businesses can save time, reduce human error, and free up resources for more strategic initiatives. Raleigh AI Solutions provides the expertise needed to identify key areas for automation, resulting in significant cost savings and improved efficiency.',
    ],
  },
  'seamless-expansion-scalable-cloud-infrastructure': {
    title: 'Seamless Expansion with Scalable Cloud Infrastructure',
    shortDescription:
      "Achieve a 50% scalability improvement with Raleigh AI Solutions' secure and scalable cloud infrastructure.",
    benefits: [
      '50% improvement in scalability',
      'Secure, future-proof infrastructure',
      'Adaptability to handle growing workloads',
    ],
    contentHeader: 'Seamless Expansion with Scalable Cloud Infrastructure',
    content: [
      'Raleigh AI Solutions offers scalable cloud infrastructure solutions designed to support seamless business growth. Whether you are expanding your team, increasing data demands, or planning for future scalability, our cloud services are customized to meet your specific needs.',
      'Our cloud infrastructure allows you to grow your business with confidence, providing a secure and flexible foundation that can handle increased workloads, user activity, and data storage. With a focus on efficiency, our solutions improve scalability by up to 50%, ensuring that your infrastructure can adapt as your business evolves without sacrificing performance or security.',
      'As businesses grow, having a scalable cloud infrastructure is critical to maintaining smooth operations. By investing in cloud solutions that scale efficiently, businesses can avoid costly disruptions and future-proof their technology stack. Raleigh AI Solutions provides the expertise needed to implement cloud services that scale alongside your business, allowing for rapid expansion without limits.',
    ],
  },
};

export function getSolutionSlugs(): string[] {
  return Object.keys(solutionsData);
}

export type SolutionSlug = keyof typeof solutionsData;