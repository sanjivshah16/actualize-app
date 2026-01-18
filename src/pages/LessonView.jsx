import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Check, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import useStore from '../store/useStore';
import { lessons } from '../data/lessons';

export default function LessonView() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { progress, completeLesson } = useStore();

  const lesson = lessons.find((l) => l.id === lessonId);
  const isCompleted = progress.lessonsCompleted.includes(lessonId);

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">Lesson not found.</p>
        <button
          onClick={() => navigate('/lessons')}
          className="btn btn-primary mt-4"
        >
          Back to Lessons
        </button>
      </div>
    );
  }

  const handleComplete = () => {
    completeLesson(lessonId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <button
          onClick={() => navigate('/lessons')}
          className="p-2 hover:bg-surface rounded-lg transition-colors mt-1"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            {lesson.title}
          </motion.h2>
          <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary">
            <span className="capitalize px-2 py-0.5 rounded-full bg-primary/20">
              {lesson.section}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {lesson.duration} min
            </span>
            <span>Week {lesson.week}, Day {lesson.day}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card prose prose-sm max-w-none"
      >
        <div className="lesson-content">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mt-6 mb-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold mt-6 mb-3 border-b border-border-inner pb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="font-semibold mt-3 mb-2">{children}</h4>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-text-primary">{children}</strong>
              ),
              code: ({ inline, children }) =>
                inline ? (
                  <code className="px-1.5 py-0.5 rounded bg-surface text-sm font-mono">
                    {children}
                  </code>
                ) : (
                  <pre className="p-4 rounded-lg bg-surface overflow-x-auto mb-4">
                    <code className="text-sm font-mono">{children}</code>
                  </pre>
                ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-border-inner px-3 py-2 bg-surface text-left font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-border-inner px-3 py-2">{children}</td>
              ),
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4"
      >
        <button
          onClick={() => navigate('/lessons')}
          className="flex-1 btn btn-outline"
        >
          Back to Lessons
        </button>
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`flex-1 btn flex items-center justify-center gap-2 ${
            isCompleted ? 'bg-success/20 text-success cursor-default' : 'btn-primary'
          }`}
        >
          {isCompleted ? (
            <>
              <Check size={18} />
              Completed
            </>
          ) : (
            <>
              <BookOpen size={18} />
              Mark Complete
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}
