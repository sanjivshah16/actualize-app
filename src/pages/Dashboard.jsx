import { Link } from 'react-router-dom';
import { PenLine, BookOpen, User, Layers, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';

const quickActions = [
  {
    title: 'Practice',
    description: 'Study mode and mock tests',
    icon: PenLine,
    path: '/practice',
    color: 'bg-primary/20',
  },
  {
    title: 'Lessons',
    description: '8-week curriculum',
    icon: BookOpen,
    path: '/lessons',
    color: 'bg-lavender/20',
  },
  {
    title: 'Flashcards',
    description: 'Quick review cards',
    icon: Layers,
    path: '/practice/flashcards',
    color: 'bg-bronze/30',
  },
  {
    title: 'Profile',
    description: 'Progress & analytics',
    icon: User,
    path: '/profile',
    color: 'bg-rosewood/20',
  },
];

export default function Dashboard() {
  const { user, progress, getOverallProgress, getEstimatedScore } = useStore();
  const overallProgress = getOverallProgress();
  const estimatedScore = getEstimatedScore();

  const stats = [
    {
      label: 'Questions Answered',
      value: progress.questionsAnswered.length,
      icon: PenLine,
    },
    {
      label: 'Lessons Completed',
      value: progress.lessonsCompleted.length,
      icon: BookOpen,
    },
    {
      label: 'Study Time',
      value: `${Math.round(progress.totalStudyTime / 60)}h`,
      icon: Clock,
    },
    {
      label: 'Est. Score',
      value: estimatedScore || '--',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1"
      >
        <h2 className="text-2xl font-bold">
          Welcome back, {user.name}!
        </h2>
        <p className="text-text-secondary">
          Keep up the momentum. You're making great progress.
        </p>
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
            Overall Progress
          </span>
          <span className="text-sm font-bold">{overallProgress}%</span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card text-center">
            <Icon size={20} className="mx-auto mb-2 text-primary" />
            <div className="text-xl font-bold">{value}</div>
            <div className="text-xs text-text-secondary">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <h3 className="text-lg font-bold">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map(({ title, description, icon: Icon, path, color }) => (
            <Link
              key={path}
              to={path}
              className="card hover:shadow-md transition-shadow active:scale-[0.98]"
            >
              <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mb-3`}>
                <Icon size={20} className="text-text-primary" />
              </div>
              <h4 className="font-bold">{title}</h4>
              <p className="text-sm text-text-secondary">{description}</p>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      {progress.questionsAnswered.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <div className="card">
            <div className="space-y-3">
              {progress.questionsAnswered.slice(-5).reverse().map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-border-inner last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.isCorrect ? 'bg-success' : 'bg-error'
                      }`}
                    />
                    <span className="text-sm">
                      Question {activity.questionId}
                    </span>
                  </div>
                  <span className="text-xs text-text-secondary">
                    {new Date(activity.timestamp).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
