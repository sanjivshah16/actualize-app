import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ChevronRight, Filter, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { resources, resourceCategories } from '../data/resources';

const sectionFilters = [
  { id: 'all', label: 'All' },
  ...resourceCategories,
];

const sectionColors = {
  english: 'bg-primary/20 text-primary',
  math: 'bg-lavender/20 text-lavender',
  reading: 'bg-bronze/30 text-text-primary',
  science: 'bg-rosewood/20 text-rosewood',
  general: 'bg-coral/20 text-coral',
};

const difficultyColors = {
  beginner: 'text-success',
  intermediate: 'text-primary',
  advanced: 'text-rosewood',
};

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredResources = resources.filter(
    (resource) => activeFilter === 'all' || resource.section === activeFilter
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-1">Resources</h2>
        <p className="text-text-secondary">
          Strategy guides, formulas, and reference materials
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary">{resources.length}</div>
          <div className="text-sm text-text-secondary">Total Guides</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-lavender">
            {resources.reduce((sum, r) => sum + r.duration, 0)}
          </div>
          <div className="text-sm text-text-secondary">Minutes of Content</div>
        </div>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 overflow-x-auto pb-2"
      >
        <Filter size={16} className="text-text-secondary flex-shrink-0" />
        {sectionFilters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
              activeFilter === id
                ? 'bg-primary text-white border-primary'
                : 'bg-surface text-text-secondary border-border-inner hover:bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* Resources List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        {filteredResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <Link
              to={`/resources/${resource.id}`}
              className="card block hover:shadow-md transition-all active:scale-[0.99]"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${sectionColors[resource.section]?.split(' ')[0] || 'bg-primary/20'} flex items-center justify-center flex-shrink-0`}>
                  <FileText size={24} className={sectionColors[resource.section]?.split(' ')[1] || 'text-primary'} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-lg truncate">{resource.title}</h3>
                    <ChevronRight size={20} className="text-text-secondary flex-shrink-0" />
                  </div>
                  <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        sectionColors[resource.section]
                      }`}
                    >
                      {resource.section}
                    </span>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Clock size={12} />
                      {resource.duration} min
                    </span>
                    <span className={`text-xs capitalize ${difficultyColors[resource.difficulty]}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-text-secondary">
            No resources found for this section.
          </div>
        )}
      </motion.div>
    </div>
  );
}
