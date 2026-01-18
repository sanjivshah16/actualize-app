import { useState } from 'react';
import { User, TrendingUp, Clock, Target, BookOpen, PenLine, BarChart3, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';

const sectionColors = {
  english: 'bg-primary',
  math: 'bg-lavender',
  reading: 'bg-bronze',
  science: 'bg-rosewood',
};

export default function Profile() {
  const { user, progress, setUser, updateSettings, getEstimatedScore, getCategoryPerformance } = useStore();
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(user.name);

  const estimatedScore = getEstimatedScore();
  const categoryPerformance = getCategoryPerformance();

  // Calculate section performance
  const sectionPerformance = ['english', 'math', 'reading', 'science'].map((section) => {
    const sectionAnswers = progress.questionsAnswered.filter(
      (a) => a.section === section
    );
    const correct = sectionAnswers.filter((a) => a.isCorrect).length;
    const total = sectionAnswers.length;
    return {
      section,
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  });

  const handleSaveName = () => {
    setUser({ name: tempName });
    setEditingName(false);
  };

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
      label: 'Mock Tests Taken',
      value: progress.mockTestsTaken.length,
      icon: BarChart3,
    },
    {
      label: 'Study Time',
      value: `${Math.round(progress.totalStudyTime / 60)}h`,
      icon: Clock,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <User size={32} className="text-text-primary" />
          </div>
          <div className="flex-1">
            {editingName ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="px-3 py-1 border border-border-inner rounded-lg bg-background"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="px-3 py-1 bg-primary rounded-lg text-sm"
                >
                  Save
                </button>
              </div>
            ) : (
              <h2
                className="text-xl font-semibold cursor-pointer hover:text-primary"
                onClick={() => setEditingName(true)}
              >
                {user.name}
              </h2>
            )}
            <p className="text-sm text-text-secondary">
              Target Score: {user.targetScore}
            </p>
          </div>
          <button className="p-2 hover:bg-surface rounded-lg">
            <Settings size={20} className="text-text-secondary" />
          </button>
        </div>
      </motion.div>

      {/* Estimated Score */}
      {estimatedScore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card text-center"
        >
          <div className="inline-flex items-center gap-2 text-text-secondary mb-2">
            <Target size={18} />
            <span className="text-sm">Estimated ACT Score</span>
          </div>
          <div className="text-5xl font-bold">{estimatedScore}</div>
          <div className="text-sm text-text-secondary mt-1">
            Based on your mock test performance
          </div>
        </motion.div>
      )}

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card text-center">
            <Icon size={20} className="mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-xs text-text-secondary">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Section Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <TrendingUp size={18} />
          Section Performance
        </h3>
        <div className="space-y-4">
          {sectionPerformance.map(({ section, correct, total, percentage }) => (
            <div key={section}>
              <div className="flex items-center justify-between mb-1">
                <span className="capitalize font-medium">{section}</span>
                <span className="text-sm text-text-secondary">
                  {total > 0 ? `${correct}/${total} (${percentage}%)` : 'No data'}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className={`h-full transition-all duration-500 ${sectionColors[section]}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Category Breakdown */}
      {categoryPerformance.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <BarChart3 size={18} />
            Category Breakdown
          </h3>
          <div className="space-y-3">
            {categoryPerformance
              .sort((a, b) => a.percentage - b.percentage)
              .slice(0, 10)
              .map(({ category, percentage, total }) => (
                <div key={category} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{category}</span>
                      <span className="text-xs text-text-secondary">
                        {percentage}% ({total} questions)
                      </span>
                    </div>
                    <div className="progress-bar h-1.5">
                      <div
                        className={`h-full transition-all duration-500 ${
                          percentage >= 70 ? 'bg-success' : percentage >= 50 ? 'bg-yellow-500' : 'bg-error'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      )}

      {/* Mock Test History */}
      {progress.mockTestsTaken.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <h3 className="font-semibold mb-4">Mock Test History</h3>
          <div className="space-y-3">
            {progress.mockTestsTaken.slice(-5).reverse().map((test, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-border-inner last:border-0"
              >
                <div>
                  <div className="font-medium">
                    {test.section === 'all' ? 'Full Test' : test.section}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {new Date(test.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{test.compositeScore}</div>
                  <div className="text-xs text-text-secondary">
                    {test.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Settings size={18} />
          Settings
        </h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <div className="font-medium">Extended Time</div>
              <div className="text-sm text-text-secondary">
                1.5x time for all timed activities
              </div>
            </div>
            <input
              type="checkbox"
              checked={user.settings.extendedTime}
              onChange={(e) => updateSettings({ extendedTime: e.target.checked })}
              className="w-5 h-5 rounded border-border-inner"
            />
          </label>

          <div className="pt-4 border-t border-border-inner">
            <label className="block">
              <div className="font-medium mb-2">Target Score</div>
              <input
                type="number"
                min="1"
                max="36"
                value={user.targetScore}
                onChange={(e) => setUser({ targetScore: parseInt(e.target.value) || 30 })}
                className="w-full px-3 py-2 border border-border-inner rounded-lg bg-background"
              />
            </label>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
