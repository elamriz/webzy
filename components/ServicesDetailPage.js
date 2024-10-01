export default function ServicesDetailPage() {
    return (
      <div className="bg-white dark:bg-black text-black dark:text-white py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">
            Detailed Information on <span className="text-purple-blue dark:text-salmon">Our Services</span>
          </h2>
  
          {/* Section for Website Development */}
          <section id="service-web-development" className="service-section py-12">
            <h3 className="text-4xl font-bold text-purple-blue dark:text-salmon">Website Development</h3>
            <p className="text-lg mt-4">
              We build responsive and modern websites that bring your brand to life.
            </p>
            <p className="text-green-600 font-bold text-lg mt-2">Starting at $999</p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Fully optimized, mobile-friendly, and designed to convert your visitors into customers.
            </p>
          </section>
  
          {/* Section for App Development */}
          <section id="service-app-development" className="service-section py-12">
            <h3 className="text-4xl font-bold text-purple-blue dark:text-salmon">App Development</h3>
            <p className="text-lg mt-4">
              Building feature-rich mobile applications for iOS and Android.
            </p>
            <p className="text-green-600 font-bold text-lg mt-2">Starting at $1,499</p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Seamless integration, intuitive user experience, and scalable architecture.
            </p>
          </section>
  
          {/* Repeat for other services */}
          {/* ... */}
  
        </div>
      </div>
    );
  }
  