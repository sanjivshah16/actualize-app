import { Link } from 'react-router-dom';
import { Clock, BookOpen, Layers, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const modes = [
  {
    id: 'simulate',
    title: 'Simulate Test',
    description: 'Timed mock test experience that replicates actual ACT conditions',
    icon: Clock,
    path: '/practice/simulate',
    features: ['Official timing', 'Full test or by section', 'Score report'],
  },
  {
    id: 'study',
    title: 'Study Mode',
    description: 'Untimed practice with immediate feedback and explanations',
    icon: BookOpen,
    path: '/practice/study',
    features: ['Instant feedback', 'Detailed explanations', 'By category'],
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Quick review of key concepts, formulas, and rules',
    icon: Layers,
    path: '/practice/flashcards',
    features: ['Swipe navigation', 'Multiple decks', 'Track progress'],
  },
  {
    id: 'quizlet',
    title: 'Link to ACT Quizlet',
    description: 'Practice with ACT flashcards and study sets on Quizlet',
    icon: ExternalLink,
    path: 'https://quizlet.com/join/US2S3HWDJ',
    features: ['External resource', 'Interactive flashcards', 'Study games'],
    external: true,
  },
];

export default function Practice() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-1">Practice</h2>
        <p className="text-text-secondary">
          Choose your practice mode to get started
        </p>
      </motion.div>

      <div className="space-y-4">
        {modes.map(({ id, title, description, icon: Icon, path, features, external }, index) => {
          const CardContent = (
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  {external ? (
                    <ExternalLink size={20} className="text-text-secondary" />
                  ) : (
                    <ChevronRight size={20} className="text-text-secondary" />
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-surface border border-border-inner"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {external ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card block hover:shadow-md transition-all active:scale-[0.99]"
                >
                  {CardContent}
                </a>
              ) : (
                <Link
                  to={path}
                  className="card block hover:shadow-md transition-all active:scale-[0.99]"
                >
                  {CardContent}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
