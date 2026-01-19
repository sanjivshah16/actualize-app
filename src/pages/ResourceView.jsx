import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, FileText, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { resources } from '../data/resources';

const sectionColors = {
  english: 'bg-primary/20 text-primary',
  math: 'bg-lavender/20 text-lavender',
  reading: 'bg-bronze/30 text-text-primary',
  science: 'bg-rosewood/20 text-rosewood',
  general: 'bg-coral/20 text-coral',
};

export default function ResourceView() {
  const { resourceId } = useParams();
  const navigate = useNavigate();

  const resource = resources.find((r) => r.id === resourceId);

  if (!resource) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">Resource not found.</p>
        <button
          onClick={() => navigate('/resources')}
          className="btn btn-primary mt-4"
        >
          Back to Resources
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <button
          onClick={() => navigate('/resources')}
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
            {resource.title}
          </motion.h2>
          <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary flex-wrap">
            <span className={`capitalize px-2 py-0.5 rounded-full ${sectionColors[resource.section]}`}>
              {resource.section}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {resource.duration} min read
            </span>
            <span className="capitalize">{resource.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="card bg-primary/5"
      >
        <div className="flex items-start gap-3">
          <Bookmark size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-text-secondary">{resource.description}</p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card prose prose-sm max-w-none"
      >
        <div className="resource-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
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
              em: ({ children }) => (
                <em className="italic text-text-primary">{children}</em>
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
              thead: ({ children }) => (
                <thead className="bg-surface">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="border border-border-inner px-3 py-2 bg-surface text-left font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-border-inner px-3 py-2">{children}</td>
              ),
              hr: () => <hr className="my-6 border-border-inner" />,
            }}
          >
            {resource.content}
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
          onClick={() => navigate('/resources')}
          className="flex-1 btn btn-outline"
        >
          Back to Resources
        </button>
        <button
          onClick={() => navigate('/practice')}
          className="flex-1 btn btn-primary flex items-center justify-center gap-2"
        >
          <FileText size={18} />
          Practice Now
        </button>
      </motion.div>
    </div>
  );
}
