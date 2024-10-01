export default function Footer() {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Footer Left: Company Info */}
          <div className="text-center md:text-left text-xl text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Devzy. All rights reserved.
          </div>

          {/* Footer Links */}
          <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-salmon dark:text-purple-blue hover:text-purple-blue dark:hover:text-salmon transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-salmon dark:text-purple-blue hover:text-purple-blue dark:hover:text-salmon transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-salmon dark:text-purple-blue hover:text-purple-blue dark:hover:text-salmon transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
