'use client'; // Add this line to ensure it's treated as a client component

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzgrvpo"); // Replace with your form ID from Formspree

  if (state.succeeded) {
    return (
      <section className="bg-black dark:bg-white text-white dark:text-black py-32" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center">
            Thank You <span className="text-purple-blue dark:text-salmon">for Getting in Touch!</span>
          </h2>
          <p className="mt-8 text-xl text-center text-gray-400 dark:text-gray-600">
            We will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black dark:bg-white text-white dark:text-black py-32" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Get in <span className="text-purple-blue dark:text-salmon">Touch</span>
        </h2>
        <p className="mt-8 text-xl text-center text-gray-400 dark:text-gray-600">
          Have a project in mind? We'd love to hear from you.
        </p>
        <div className="mt-16 max-w-2xl mx-auto">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-xl mb-2 text-white dark:text-black" htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-6 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-blue dark:focus:ring-salmon transition duration-300"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xl mb-2 text-white dark:text-black" htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-6 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-blue dark:focus:ring-salmon transition duration-300"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xl mb-2 text-white dark:text-black" htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full px-6 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-blue dark:focus:ring-salmon transition duration-300"
                rows="6"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-4 bg-salmon dark:bg-purple-blue text-black dark:text-white text-xl font-semibold rounded-lg hover:bg-purple-blue dark:hover:bg-salmon hover:text-white dark:hover:text-black transition duration-300"
            >
              {state.submitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
