// components/HeroSection.js
'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Use the slim version

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    // Loads the slim version of tsparticles
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative bg-black dark:bg-white text-white dark:text-black py-32 overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 w-full h-full"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ['#6A5ACD', '#FA8072'], // Colors for particles
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            size: {
              value: 4,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'bubble',
              },
              onClick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-extrabold">
          Welcome to <span className="text-purple-blue dark:text-salmon">Prodream</span>
        </h1>
        <p className="mt-8 text-2xl">
          Bringing your dreams to life with innovative design and cutting-edge technology. Prodream makes your vision a reality.
        </p>
        <button className="mt-12 px-12 py-4 bg-salmon text-black dark:bg-purple-blue dark:text-white rounded-full text-xl transition duration-300
  hover:bg-purple-blue hover:text-white dark:hover:bg-salmon dark:hover:text-black">
  Get Started
</button>

      </div>
    </section>
  );
}
