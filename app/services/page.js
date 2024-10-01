'use client';

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaShoppingCart,
  FaBullhorn,
  FaSearch,
  FaRegLightbulb,
  FaDraftingCompass,
  FaCode,
  FaRocket,
} from 'react-icons/fa'; // Add icons for process steps

export default function ServiceDetailPage() {
  const services = [
    {
      key: 'website-development',
      title: 'Website Development',
      icon: <FaLaptopCode className="text-salmon dark:text-purple-blue text-5xl" />,
      description:
        'We create responsive, high-performance websites that reflect your brand and engage your audience. From simple sites to complex platforms, we’ve got you covered.',
      stack: ['React', 'Next.js', 'HTML5/CSS3', 'Node.js', 'MongoDB'],
      price: 'Starting at 999€',
      process: [
        { step: 'Discovery & Planning', icon: <FaRegLightbulb /> },
        { step: 'Wireframes & Design', icon: <FaDraftingCompass /> },
        { step: 'Development & Testing', icon: <FaCode /> },
        { step: 'Launch & Support', icon: <FaRocket /> },
      ],
    },
    {
      key: 'app-development',
      title: 'App Development',
      icon: <FaMobileAlt className="text-salmon dark:text-purple-blue text-5xl" />,
      description:
        'Build scalable, feature-rich mobile apps for iOS and Android. We ensure the best user experience with modern, fast, and reliable technology.',
      stack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      price: 'Starting at 1499€',
      process: [
        { step: 'Concept & Strategy', icon: <FaRegLightbulb /> },
        { step: 'UI/UX Design', icon: <FaDraftingCompass /> },
        { step: 'Development & Testing', icon: <FaCode /> },
        { step: 'Launch & Maintenance', icon: <FaRocket /> },
      ],
    },
    // ... other services
  ];

  return (
    <div className="bg-black dark:bg-white text-white dark:text-black py-32">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-purple-blue dark:text-salmon">Services</span>
        </h1>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ service }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
      <div className="text-center">
        {/* Icon */}
        <div className="mb-4">{service.icon}</div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-white dark:text-black mb-2">
          {service.title}
        </h3>

        {/* Price */}
        <p className="text-purple-blue dark:text-salmon font-semibold text-lg mb-4">
          {service.price}
        </p>

        {/* Description */}
        <p className="text-gray-400 dark:text-gray-600 mb-6">{service.description}</p>

        {/* Stack */}
        <h4 className="text-lg font-semibold text-salmon dark:text-purple-blue mb-2">
          Technologies We Use:
        </h4>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {service.stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 dark:bg-gray-300 text-gray-200 dark:text-black py-1 px-3 rounded-full text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Process */}
        <h4 className="text-lg font-semibold text-salmon dark:text-purple-blue mb-4">
          Our Process:
        </h4>
        <div className="flex flex-col space-y-4">
          {service.process.map((step, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-700 dark:bg-gray-300 p-3 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="text-salmon dark:text-purple-blue mr-3">{step.icon}</div>
              <p className="text-gray-300 dark:text-gray-700 font-semibold">{step.step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
