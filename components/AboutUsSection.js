// components/AboutUsSection.js
'use client';

import { motion } from 'framer-motion';

export default function AboutUsSection() {
  return (
    <section className="bg-black dark:bg-white text-white dark:text-black py-32" id="about-us">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          About <span className="text-salmon dark:text-purple-blue">Us</span>
        </h2>

        {/* Portraits */}
        <div className="flex justify-center space-x-10 mt-10">
          <div className="text-center">
            <img
              src="/img/zakariyae.jpg"
              alt="Zakariaye El Amri"
              className="w-48 h-48 object-cover rounded-full border-4 border-salmon shadow-lg transition-transform duration-300 hover:scale-105"
              />
            <h3 className="mt-4 text-2xl font-semibold">Zakariaye El Amri</h3>
            <p className="text-gray-400">Co-Founder & Developer</p>
          </div>
          <div className="text-center">
            <img
              src="/img/younes.jpg"
              alt="Younes Bourouis"
              className="w-48 h-48 object-cover rounded-full border-4 border-salmon shadow-lg transition-transform duration-300 hover:scale-105"
              />
            <h3 className="mt-4 text-2xl font-semibold">Younes Bourouis</h3>
            <p className="text-gray-400">Co-Founder & Designer</p>
          </div>
        </div>

        {/* About Us Text */}
        <motion.div
          className="mt-12 text-xl space-y-6"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed">
            We are a team of passionate developers and designers committed to creating exceptional digital experiences.
          </p>
          <p className="leading-relaxed">
            Founded by Zakariaye and Younes, our company specializes in crafting websites and apps that not only look stunning but also perform exceptionally.
          </p>
          <p className="leading-relaxed">
            Our mission is to bring your ideas to life with creativity, innovation, and dedication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
