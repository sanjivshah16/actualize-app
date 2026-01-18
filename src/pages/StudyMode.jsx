import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Flag, Check, X, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';
import { questions, questionCategories } from '../data/questions';

const sections = [
  { id: 'english', label: 'English', color: 'bg-primary/20' },
  { id: 'math', label: 'Math', color: 'bg-lavender/20' },
  { id: 'reading', label: 'Reading', color: 'bg-bronze/30' },
  { id: 'science', label: 'Science', color: 'bg-rosewood/20' },
];

export default function StudyMode() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { recordAnswer, toggleFlag, currentSession } = useStore();

  const [step, setStep] = useState('select'); // 'select' | 'category' | 'practice'
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [results, setResults] = useState([]);

  // Filter questions when section/category changes
  useEffect(() => {
    if (selectedSection) {
      let filtered = questions.filter((q) => q.section === selectedSection);
      if (selectedCategory && selectedCategory !== 'all') {
        filtered = filtered.filter((q) => q.category === selectedCategory);
      }
      setFilteredQuestions(filtered);
    }
  }, [selectedSection, selectedCategory]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswerSelect = useCallback((answer) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);

    const isCorrect = answer === currentQuestion.correctAnswer;
    setResults((prev) => [...prev, { questionId: currentQuestion.id, isCorrect }]);
    recordAnswer(currentQuestion.id, answer, isCorrect, 0);
  }, [showExplanation, currentQuestion, recordAnswer]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // End of practice - show results
      setStep('results');
    }
  }, [currentIndex, filteredQuestions.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (step !== 'practice') return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        const labels = ['A', 'B', 'C', 'D'];
        handleAnswerSelect(labels[parseInt(e.key) - 1]);
      } else if (e.key === 'ArrowRight' && showExplanation) {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, showExplanation, handleAnswerSelect, handleNext, handlePrevious]);

  // Section Selection
  if (step === 'select') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/practice')}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold">Study Mode</h2>
            <p className="text-text-secondary">Select a section to practice</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {sections.map(({ id, label, color }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedSection(id);
                setStep('category');
              }}
              className={`card text-left hover:shadow-md transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-3`}>
                <span className="font-bold text-lg">{label[0]}</span>
              </div>
              <h3 className="font-semibold">{label}</h3>
              <p className="text-sm text-text-secondary">
                {questions.filter((q) => q.section === id).length} questions
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Category Selection
  if (step === 'category') {
    const categories = questionCategories[selectedSection] || [];
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setStep('select')}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold capitalize">
              {selectedSection}
            </h2>
            <p className="text-text-secondary">Select a category</p>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setStep('practice');
            }}
            className="w-full card text-left hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">All Categories</h3>
                <p className="text-sm text-text-secondary">
                  Practice all {selectedSection} questions
                </p>
              </div>
              <span className="text-sm font-medium text-primary">
                {questions.filter((q) => q.section === selectedSection).length} questions
              </span>
            </div>
          </button>

          {categories.map((category) => {
            const count = questions.filter(
              (q) => q.section === selectedSection && q.category === category
            ).length;
            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setStep('practice');
                }}
                className="w-full card text-left hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{category}</h3>
                  <span className="text-sm text-text-secondary">
                    {count} questions
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Results
  if (step === 'results') {
    const correct = results.filter((r) => r.isCorrect).length;
    const percentage = Math.round((correct / results.length) * 100);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
          <p className="text-text-secondary">Here's how you did</p>
        </div>

        <div className="card text-center">
          <div className="text-5xl font-bold mb-2">{percentage}%</div>
          <div className="text-text-secondary">
            {correct} of {results.length} correct
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => {
              setStep('select');
              setCurrentIndex(0);
              setResults([]);
              setSelectedSection(null);
              setSelectedCategory(null);
            }}
            className="btn btn-outline"
          >
            New Session
          </button>
          <button
            onClick={() => navigate('/practice')}
            className="btn btn-primary"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  // Practice Mode
  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No questions available for this selection.</p>
        <button
          onClick={() => setStep('select')}
          className="btn btn-primary mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep('category')}
          className="p-2 hover:bg-surface rounded-lg transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm text-text-secondary">
          {currentIndex + 1} of {filteredQuestions.length}
        </span>
        <button
          onClick={() => toggleFlag(currentQuestion.id)}
          className="p-2 hover:bg-surface rounded-lg transition-colors"
        >
          <Flag size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="card"
        >
          {/* Category Badge */}
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/20 text-text-primary mb-4">
            {currentQuestion.category}
          </span>

          {/* Question Content */}
          <div className="mb-6">
            {currentQuestion.passage && (
              <p className="text-sm text-text-secondary mb-4 p-3 bg-surface rounded-lg">
                {currentQuestion.passage}
              </p>
            )}
            <p className="text-lg whitespace-pre-wrap">{currentQuestion.content}</p>
            {currentQuestion.prompt && (
              <p className="mt-2 text-text-secondary">{currentQuestion.prompt}</p>
            )}
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.label;
              const isCorrect = option.label === currentQuestion.correctAnswer;
              const showResult = showExplanation;

              let bgClass = 'bg-surface hover:bg-border/50';
              if (showResult) {
                if (isCorrect) bgClass = 'bg-success/20 border-success';
                else if (isSelected && !isCorrect) bgClass = 'bg-error/20 border-error';
              } else if (isSelected) {
                bgClass = 'bg-primary/20 border-primary';
              }

              return (
                <button
                  key={option.label}
                  onClick={() => handleAnswerSelect(option.label)}
                  disabled={showExplanation}
                  className={`w-full p-4 rounded-lg border text-left transition-all ${bgClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-background border border-border-inner flex items-center justify-center font-medium">
                      {option.label}
                    </span>
                    <span className="flex-1">{option.text}</span>
                    {showResult && isCorrect && (
                      <Check size={20} className="text-success" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <X size={20} className="text-error" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-border-inner"
              >
                <h4 className="font-semibold mb-2">Explanation</h4>
                <p className="text-text-secondary text-sm mb-4">
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.strategyTips && (
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <h5 className="font-medium text-sm mb-1">Strategy Tip</h5>
                    <p className="text-sm text-text-secondary">
                      {currentQuestion.strategyTips}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="btn btn-outline flex items-center gap-2 disabled:opacity-50"
        >
          <ArrowLeft size={18} />
          Previous
        </button>
        {showExplanation ? (
          <button onClick={handleNext} className="btn btn-primary flex items-center gap-2">
            {currentIndex === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
            <ArrowRight size={18} />
          </button>
        ) : (
          <div className="text-sm text-text-secondary">Select an answer</div>
        )}
      </div>
    </div>
  );
}
