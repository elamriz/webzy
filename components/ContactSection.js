// components/ContactSection.js
export default function ContactSection() {
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
          <form className="space-y-8">
            {/* Name Field */}
            <div>
              <label className="block text-xl mb-2 text-white dark:text-black">Your Name</label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-blue dark:focus:ring-salmon transition duration-300"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xl mb-2 text-white dark:text-black">Your Email</label>
              <input
                type="email"
                className="w-full px-6 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-blue dark:focus:ring-salmon transition duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xl mb-2 text-white dark:text-black">Your Message</label>
              <textarea
                className="w-full px-6 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-blue dark:focus:ring-salmon transition duration-300"
                rows="6"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-salmon dark:bg-purple-blue text-black dark:text-white text-xl font-semibold rounded-lg hover:bg-purple-blue dark:hover:bg-salmon hover:text-white dark:hover:text-black transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
