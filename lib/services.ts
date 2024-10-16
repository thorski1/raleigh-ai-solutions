import { IconType } from 'react-icons';
import { 
  FiShield, FiCpu, FiCloud, FiBarChart2, FiBook,
  FiCheckSquare, FiSettings, FiAlertTriangle,
  FiCode, FiRefreshCw, FiTrendingUp,
  FiLock, FiMaximize2, FiDollarSign,
  FiPieChart, FiMonitor, FiActivity,
  FiBookOpen, FiUsers, FiAward
} from 'react-icons/fi';

export interface Service {
  slug: {
    current: string;  
  };
  title: string;
  description: string;
  longDescription: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  benefits: string[];
  videoSrc: string;
  thumbnailSrc: string;
  hoverDescription: string;
}

export const iconMap: { [key: string]: IconType } = {
  FiShield, FiCpu, FiCloud, FiBarChart2, FiBook,
  FiCheckSquare, FiSettings, FiAlertTriangle,
  FiCode, FiRefreshCw, FiTrendingUp,
  FiLock, FiMaximize2, FiDollarSign,
  FiPieChart, FiMonitor, FiActivity,
  FiBookOpen, FiUsers, FiAward
};

export const services = [
  {
    slug: '508-compliance-consulting',
    title: '508 Compliance Consulting',
    description: 'Ensure your AI systems and digital content comply with Section 508 accessibility standards, ensuring inclusivity for all users.',
    longDescription: 'Our 508 Compliance Consulting services help organizations ensure their AI systems and digital content are fully accessible and meet the requirements of Section 508 of the Rehabilitation Act. We work closely with your team to assess, audit, and implement accessibility features that enable all users, including individuals with disabilities, to interact with your systems seamlessly. From web-based platforms to AI-driven tools, we ensure that your digital offerings comply with federal accessibility standards. Our team provides expert guidance on everything from automated testing to manual assessments, helping you mitigate risk and avoid costly penalties while fostering an inclusive user experience.',
    features: [
      {
        title: 'Comprehensive Audits',
        description: 'Thorough evaluation of your digital assets for compliance with Section 508 standards.',
        icon: "FiCheckSquare",
      },
      {
        title: 'Implementation Guidance',
        description: 'Expert advice on implementing accessibility features in AI systems and digital content.',
        icon: "FiSettings",
      },
      {
        title: 'Risk Mitigation',
        description: 'Strategies to reduce legal risks associated with non-compliance.',
        icon: "FiAlertTriangle",
      },
    ],
    benefits: [
      'Improved accessibility for all users',
      'Reduced legal risks',
      'Enhanced user experience',
      'Compliance with federal standards',
      'Expanded audience reach',
    ],
    videoSrc: 'https://www.youtube.com/embed/your-508-compliance-video',
    thumbnailSrc: '/thumbnail-1.png',
    hoverDescription: 'Ensure your AI systems meet government accessibility standards.',
  },
  {
    slug: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    description: 'Streamline your operations with cutting-edge AI models and custom automation solutions designed to optimize your business workflows.',
    longDescription: "Elevate your business operations by integrating advanced AI models and workflow automation tools tailored to your specific needs. Our AI-driven solutions analyze your current processes and identify key areas for improvement, allowing us to design automated workflows that boost efficiency and reduce human error. Whether you're looking to automate data entry, streamline communication, or enhance decision-making with predictive analytics, our custom AI models will help you save time, cut costs, and improve overall productivity. Perfect for businesses across all industries, our solutions are designed to grow with your company and adapt to your changing needs.",
    features: [
      {
        title: 'Custom AI Models',
        description: 'Tailored AI solutions designed to address your specific business challenges.',
        icon: "FiCode",
      },
      {
        title: 'Workflow Automation',
        description: 'Streamlined processes that reduce manual tasks and improve efficiency.',
        icon: "FiRefreshCw",
      },
      {
        title: 'Predictive Analytics',
        description: 'Data-driven insights to enhance decision-making and forecasting.',
        icon: "FiTrendingUp",
      },
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced human error',
      'Cost savings through automation',
      'Improved decision-making capabilities',
      'Scalable solutions that grow with your business',
    ],
    videoSrc: 'https://www.youtube.com/embed/your-ai-integration-video',
    thumbnailSrc: '/thumbnail-2.png',
    hoverDescription: 'Enhance business processes with custom AI models and workflow automation tools.',
  },
  {
    slug: 'cloud-infrastructure-setup',
    title: 'Cloud Infrastructure Setup',
    description: "Build secure and scalable cloud infrastructure solutions tailored for small and medium-sized enterprises (SMEs).",
    longDescription: "Our cloud infrastructure solutions are designed to provide small and medium-sized enterprises (SMEs) with secure, scalable, and cost-effective systems that meet their unique business needs. We help you migrate to the cloud or enhance your current cloud setup, ensuring your infrastructure is equipped to handle growing data demands, streamline operations, and safeguard against potential threats. Whether you're looking for public, private, or hybrid cloud solutions, our team of experts ensures a seamless setup that allows your business to run efficiently and securely. With a focus on scalability, our cloud infrastructure is built to grow alongside your business while maintaining the highest levels of security and reliability.",
    features: [
      {
        title: 'Secure Migration',
        description: "Safe and efficient transition of your data and applications to the cloud.",
        icon: "FiLock",
      },
      {
        title: 'Scalable Architecture',
        description: 'Flexible infrastructure design that grows with your business needs.',
        icon: "FiMaximize2",
      },
      {
        title: 'Cost Optimization',
        description: 'Efficient resource allocation to minimize operational costs.',
        icon: "FiDollarSign",
      },
    ],
    benefits: [
      'Enhanced data security',
      'Improved scalability and flexibility',
      'Reduced IT infrastructure costs',
      'Increased business agility',
      'Reliable disaster recovery solutions',
    ],
    videoSrc: 'https://www.youtube.com/embed/your-cloud-infrastructure-video',
    thumbnailSrc: '/thumbnail-3.png',
    hoverDescription: 'Secure scalable cloud infrastructure solutions for SMEs.',
  },
  {
    slug: 'data-analytics-business-intelligence',
    title: 'Data Analytics & Business Intelligence',
    description: "Harness the power of AI-driven analytics to transform raw data into actionable insights for smarter, data-driven decision-making.",
    longDescription: "Our data analytics and business intelligence solutions use advanced AI-powered tools to help you make informed decisions based on accurate, real-time data. We enable businesses to turn their raw data into actionable insights, allowing for better forecasting, trend analysis, and strategic planning. Whether it's analyzing customer behavior, optimizing supply chain operations, or identifying market trends, our solutions are designed to help you leverage your data to drive growth. With user-friendly dashboards and customizable reports, you can visualize complex data and make smarter decisions faster than ever before.",
    features: [
      {
        title: 'AI-Powered Analytics',
        description: 'Advanced algorithms that uncover hidden patterns and insights in your data.',
        icon: "FiPieChart",
      },
      {
        title: 'Real-Time Dashboards',
        description: 'Interactive visualizations for monitoring key performance indicators.',
        icon: "FiMonitor",
      },
      {
        title: 'Predictive Modeling',
        description: 'Forecast future trends and outcomes based on historical data.',
        icon: "FiActivity",
      },
    ],
    benefits: [
      'Data-driven decision making',
      'Improved forecasting accuracy',
      'Enhanced operational efficiency',
      'Deeper customer insights',
      'Competitive advantage through data utilization',
    ],
    videoSrc: 'https://www.youtube.com/embed/your-data-analytics-video',
    thumbnailSrc: '/thumbnail-4.png',
    hoverDescription: 'Leverage AI-powered data analytics for data-driven decision-making.',
  },
  {
    slug: 'technical-training-ai-education',
    title: 'Technical Training & AI Education',
    description: "Equip your team with essential AI skills and technical knowledge through customized training programs tailored to your business needs.",
    longDescription: "Our technical training and AI education services provide your team with the skills and knowledge they need to stay ahead in today's rapidly evolving digital landscape. From AI integration to advanced technical topics, our custom training programs are designed to meet your company's unique needs. Led by certified subject matter experts, our programs focus on hands-on learning and real-world applications to ensure your team gains practical, actionable skills. Whether it's AI-driven solutions or mastering technical tools like SharePoint and Power Automate, we offer comprehensive training to empower your workforce and drive productivity.",
    features: [
      {
        title: 'Customized Curricula',
        description: 'Tailored training programs designed to meet your specific business needs.',
        icon: "FiBookOpen",
      },
      {
        title: 'Hands-On Workshops',
        description: 'Practical, interactive sessions for applied learning and skill development.',
        icon: "FiUsers",
      },
      {
        title: 'Certification Preparation',
        description: 'Targeted courses to help your team achieve industry-recognized certifications.',
        icon: "FiAward",
      },
    ],
    benefits: [
      'Enhanced team productivity',
      'Improved technical proficiency',
      'Increased innovation capabilities',
      'Better retention of skilled employees',
      'Competitive advantage through a highly skilled workforce',
    ],
    videoSrc: 'https://www.youtube.com/embed/your-technical-training-video',
    thumbnailSrc: '/thumbnail-1.png',
    hoverDescription: 'Empower your team with AI training programs and technical training services.',
  },
];