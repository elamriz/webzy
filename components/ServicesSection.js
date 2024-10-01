'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaShoppingCart,
  FaBullhorn,
  FaSearch,
  FaPenNib,
  FaFileSignature,
  FaRegLightbulb,
  FaDraftingCompass,
  FaCode,
  FaRocket,
} from 'react-icons/fa';

export default function ServicesSection() {
  const controls = useAnimation();
  const [activeService, setActiveService] = useState(null); // Track expanded card

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      translateY: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }));
  }, [controls]);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index); // Toggle expand/collapse
  };

  return (
    <section className="bg-black dark:bg-white text-white dark:text-black py-32" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-purple-blue dark:text-salmon">Services</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform ${activeService === index ? 'shadow-2xl' : ''}`}
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              layout
              style={{
                maxHeight: activeService === index ? '1000px' : '400px', // Control max height based on expansion
                overflow: 'hidden', // Prevent overflow
                transition: 'max-height 0.5s ease-in-out',
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <service.icon className="text-4xl text-salmon dark:text-purple-blue" />
                <h3 className="text-2xl font-semibold text-salmon dark:text-purple-blue">
                  {service.title}
                </h3>
              </div>
              <div className="bg-green-100 text-green-800 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-4">
                Starting at {service.price}
              </div>
              <p className="text-lg mb-4">{service.description}</p>
              <p className="text-gray-400 dark:text-gray-600 mb-6">{service.details}</p>

              {/* Learn More button */}
              <button
                onClick={() => toggleService(index)}
                className="inline-block bg-purple-blue dark:bg-salmon text-white dark:text-black font-bold py-2 px-6 rounded-full hover:bg-salmon dark:hover:bg-purple-blue transition duration-300"
              >
                {activeService === index ? 'Learn Less' : 'Learn More'} →
              </button>

              {/* Expanded Content directly inside the same card */}
              <AnimatePresence>
                {activeService === index && (
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Process section inside the expanded card */}
                    <div className="bg-gray-700 dark:bg-gray-300 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-salmon dark:text-purple-blue mb-4">
                        Our Process:
                      </h4>
                      <div className="flex flex-col space-y-4">
                        {service.process.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-sm"
                          >
                            <div className="text-salmon dark:text-purple-blue mr-3">
                              {processIcons[step] || <FaRegLightbulb />}
                            </div>
                            <p className="text-gray-300 dark:text-gray-700">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies section inside the expanded card */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-salmon dark:text-purple-blue mb-2">
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-800 dark:bg-gray-100 text-gray-300 dark:text-gray-800 py-1 px-3 rounded-full text-sm shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Define process icons globally
const processIcons = {
  'Discovery & Planning': <FaRegLightbulb />,
  'Wireframes & Design': <FaDraftingCompass />,
  'Development & Testing': <FaCode />,
  'Launch & Support': <FaRocket />,
};

// Service Data with Prices and Slugs
const servicesData = [
  {
    title: 'Website Development',
    price: '499€',
    description:
      'We build responsive and modern websites that bring your brand to life.',
    details:
      'Fully optimized, mobile-friendly, and designed to convert your visitors into customers.',
    icon: FaLaptopCode,
    process: ['Discovery & Planning', 'Wireframes & Design', 'Development & Testing', 'Launch & Support'],
    stack: ['React', 'Next.js', 'PHP', 'MySQL','MongoDB','HTML','CSS'],
  },
  {
    title: 'App Development',
    price: '699€',
    description:
      'Building feature-rich mobile applications for iOS and Android.',
    details:
      'Seamless integration, intuitive user experience, and scalable architecture.',
    icon: FaMobileAlt,
    process: ['Concept & Strategy', 'UI/UX Design', 'Development & Testing', 'Launch & Maintenance'],
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
 
  {
    title: 'E-commerce Solutions',
    price: '899€',
    description:
      'We create powerful e-commerce platforms that boost your sales.',
    details:
      'From payment integration to product management, we handle it all.',
    icon: FaShoppingCart,
    process: ['Storefront Design', 'Inventory Management', 'Payment Integration', 'SEO & Marketing Setup'],
    stack: ['Shopify', 'WooCommerce', 'Magento', 'Node.js'],
  },
  {
    title: 'Digital Marketing',
    price: '299€',
    description:
      'Strategies to expand your digital presence and reach your target audience.',
    details:
      'We use SEO, PPC, and social media to increase your visibility and engagement.',
    icon: FaBullhorn,
    process: ['SEO Audit', 'Marketing Strategy', 'Campaign Execution', 'Performance Analysis'],
    stack: ['Google Ads', 'Facebook Ads', 'SEO Tools', 'Google Analytics'],
  },
  {
    title: 'SEO Optimization',
    price: '199€',
    description:
      'Boost your website’s ranking with our expert SEO services.',
    details:
      'We ensure your site gets seen by the right audience through keyword optimization.',
    icon: FaSearch,
    process: ['Site Audit', 'Keyword Research', 'On-Page SEO', 'Ongoing Monitoring'],
    stack: ['Yoast SEO', 'Ahrefs', 'SEMrush', 'Google Search Console'],
  },
  {
    title: 'Branding & Logo Design',
    price: '199€',
    description:
      'Creating unique brand identities that resonate with your audience.',
    details:
      'We design logos, color schemes, and brand guidelines that tell your brand story.',
    icon: FaFileSignature,
    process: ['Brand Research', 'Concept Development', 'Design & Feedback', 'Final Delivery'],
    stack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva'],
  }]
