import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Check, ChevronRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';
import { lessons, curriculum } from '../data/lessons';

const sectionFilters = [
  { id: 'all', label: 'All' },
  { id: 'english', label: 'English' },
  { id: 'math', label: 'Math' },
  { id: 'reading', label: 'Reading' },
  { id: 'science', label: 'Science' },
  { id: 'general', label: 'General' },
];

const sectionColors = {
  english: 'bg-primary/20 text-primary',
  math: 'bg-lavender/20 text-lavender',
  reading: 'bg-bronze/30 text-text-primary',
  science: 'bg-rosewood/20 text-rosewood',
  general: 'bg-coral/20 text-coral',
};

export default function Lessons() {
  const { progress, completeLesson, getOverallProgress } = useStore();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedWeek, setExpandedWeek] = useState(1);

  const overallProgress = getOverallProgress();

  const filteredCurriculum = curriculum.map((week) => ({
    ...week,
    days: week.days.filter(
      (lesson) => activeFilter === 'all' || lesson.section === activeFilter
    ),
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-1">Lessons</h2>
        <p className="text-text-secondary">8-week ACT preparation curriculum</p>
      </motion.div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-text-secondary">
            Curriculum Progress
          </span>
          <span className="text-sm font-semibold">
            {progress.lessonsCompleted.length} / {lessons.length} lessons
          </span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.8 }}
          />
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

      {/* Curriculum */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        {filteredCurriculum.map((week) => {
          const completedInWeek = week.days.filter((d) =>
            progress.lessonsCompleted.includes(d.id)
          ).length;
          const isExpanded = expandedWeek === week.week;

          return (
            <div key={week.week} className="card">
              <button
                onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                className="w-full flex items-center justify-between"
              >
                <div className="text-left">
                  <h3 className="font-semibold">Week {week.week}: {week.theme}</h3>
                  <p className="text-sm text-text-secondary">{week.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-secondary">
                    {completedInWeek}/{week.days.length}
                  </span>
                  <ChevronRight
                    size={20}
                    className={`text-text-secondary transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>

              {isExpanded && week.days.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-border-inner space-y-2"
                >
                  {week.days.map((lesson) => {
                    const isCompleted = progress.lessonsCompleted.includes(lesson.id);
                    return (
                      <Link
                        key={lesson.id}
                        to={`/lessons/${lesson.id}`}
                        className="block p-3 rounded-lg hover:bg-surface transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isCompleted ? 'bg-success text-white' : 'bg-surface border border-border-inner'
                            }`}
                          >
                            {isCompleted ? (
                              <Check size={16} />
                            ) : (
                              <BookOpen size={16} />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium truncate">
                                {lesson.title}
                              </span>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                  sectionColors[lesson.section]
                                }`}
                              >
                                {lesson.section}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                              <Clock size={14} />
                              <span>{lesson.duration} min</span>
                            </div>
                          </div>
                          <ChevronRight size={18} className="text-text-secondary" />
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}

              {isExpanded && week.days.length === 0 && (
                <div className="mt-4 pt-4 border-t border-border-inner text-center text-text-secondary text-sm">
                  No lessons match the current filter
                </div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
