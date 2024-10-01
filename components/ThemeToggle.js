import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import Font Awesome icons

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="relative inline-block w-16 h-8 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        id="toggleTheme"
        className="absolute opacity-0 w-0 h-0"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        htmlFor="toggleTheme"
        className={`block overflow-hidden h-8 rounded-full cursor-pointer transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-300' : 'bg-gradient-to-r from-blue-800 to-purple-600'
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 transform flex items-center justify-center ${
            theme === 'dark' ? 'translate-x-0' : 'translate-x-8'
          }`}
        >
          {theme === 'dark' ? <FaSun size={16} className="text-gray-600" /> : <FaMoon size={16} className="text-yellow-400" />}
        </span>
      </label>
    </div>
  );
}
