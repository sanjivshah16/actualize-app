import { User, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

export default function Header() {
  const { user, toggleDarkMode } = useStore();
  const isDarkMode = user.settings.darkMode;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border-inner px-4 py-3 dark:bg-[#1a1a1a] dark:border-[#404040]">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <h1 className="app-title text-4xl tracking-wider">
            <span className="app-title-bold">ACT</span>
            <span className="app-title-light">UALIZE</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-surface transition-colors dark:hover:bg-[#2d2d2d]"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-text-secondary" />
            )}
          </button>

          <Link
            to="/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-surface transition-colors dark:hover:bg-[#2d2d2d]"
          >
            <span className="text-sm text-text-secondary hidden sm:block">
              {user.name}
            </span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User size={18} className="text-white" />
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
