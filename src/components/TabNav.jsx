import { NavLink } from 'react-router-dom';
import { PenLine, BookOpen, FileText, Settings } from 'lucide-react';

const tabs = [
  { path: '/practice', label: 'Practice', icon: PenLine },
  { path: '/lessons', label: 'Lessons', icon: BookOpen },
  { path: '/resources', label: 'Resources', icon: FileText },
  { path: '/profile', label: 'Profile', icon: Settings },
];

export default function TabNav() {
  return (
    <nav className="bg-background border-b border-border-inner">
      <div className="max-w-4xl mx-auto">
        <div className="flex">
          {tabs.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-text-primary border-b-2 border-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
