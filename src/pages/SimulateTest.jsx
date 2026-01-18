import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Flag, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useAnimation } from 'framer-motion';
import useStore from '../store/useStore';
import { questions, exams, timingConfig } from '../data/questions';

const sections = [
  { id: 'english', label: 'English' },
  { id: 'math', label: 'Math' },
  { id: 'reading', label: 'Reading' },
  { id: 'science', label: 'Science' },
];

export default function SimulateTest() {
  const navigate = useNavigate();
  const { user, recordMockTest, setAnswer, toggleFlag, currentSession } = useStore();

  const [step, setStep] = useState('setup'); // 'setup' | 'test' | 'review' | 'results'
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSection, setSelectedSection] = useState('all');
  const [extendedTime, setExtendedTime] = useState(user.settings.extendedTime);

  const [testQuestions, setTestQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [testStarted, setTestStarted] = useState(false);

  // Swipe controls
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Handle drag/swipe for question navigation
  const handleDragEnd = useCallback((event, info) => {
    const swipeThreshold = 50;

    if (info.offset.x < -swipeThreshold) {
      // Swipe left - next question
      setCurrentIndex((i) => Math.min(testQuestions.length - 1, i + 1));
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right - previous question
      setCurrentIndex((i) => Math.max(0, i - 1));
    }

    controls.start({ x: 0 });
  }, [testQuestions.length, controls]);

  // Get timing based on test type
  const getTiming = useCallback(() => {
    const config = selectedExam?.type === 'enhanced'
      ? timingConfig.enhanced
      : timingConfig.legacy;

    if (selectedSection === 'all') {
      return Object.values(config).reduce((sum, s) => sum + s.time, 0);
    }
    return config[selectedSection]?.time || 35;
  }, [selectedExam, selectedSection]);

  // Start test
  const startTest = useCallback(() => {
    const filtered = questions.filter((q) => {
      if (selectedSection !== 'all' && q.section !== selectedSection) return false;
      return true;
    });

    setTestQuestions(filtered);
    const baseTime = getTiming() * 60; // Convert to seconds
    setTimeRemaining(extendedTime ? baseTime * 1.5 : baseTime);
    setTestStarted(true);
    setStep('test');
  }, [selectedSection, getTiming, extendedTime]);

  // Timer
  useEffect(() => {
    if (!testStarted || step !== 'test') return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setStep('review');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, step]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle answer selection
  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [testQuestions[currentIndex].id]: answer,
    }));
  };

  // Handle flag toggle
  const handleFlag = () => {
    const qId = testQuestions[currentIndex].id;
    setFlagged((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  // Submit test
  const submitTest = () => {
    let correct = 0;
    testQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });

    const percentage = (correct / testQuestions.length) * 100;
    const estimatedScore = Math.round((percentage / 100) * 36); // Rough ACT score estimate

    recordMockTest({
      date: new Date().toISOString(),
      section: selectedSection,
      questionsTotal: testQuestions.length,
      questionsCorrect: correct,
      percentage,
      compositeScore: estimatedScore,
    });

    setStep('results');
  };

  const currentQuestion = testQuestions[currentIndex];

  // Setup Screen
  if (step === 'setup') {
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
            <h2 className="text-2xl font-bold">Simulate Test</h2>
            <p className="text-text-secondary">Configure your mock test</p>
          </div>
        </div>

        {/* Exam Selection */}
        <div className="card">
          <h3 className="font-semibold mb-3">Select Exam Type</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedExam({ type: 'enhanced', code: 'E01' })}
              className={`p-4 rounded-lg border text-left transition-all ${
                selectedExam?.type === 'enhanced'
                  ? 'border-primary bg-primary/10'
                  : 'border-border-inner hover:border-primary/50'
              }`}
            >
              <div className="font-medium">Enhanced ACT</div>
              <div className="text-sm text-text-secondary">Sept 2025+</div>
            </button>
            <button
              onClick={() => setSelectedExam({ type: 'legacy', code: 'A09' })}
              className={`p-4 rounded-lg border text-left transition-all ${
                selectedExam?.type === 'legacy'
                  ? 'border-primary bg-primary/10'
                  : 'border-border-inner hover:border-primary/50'
              }`}
            >
              <div className="font-medium">Legacy ACT</div>
              <div className="text-sm text-text-secondary">Pre-2025</div>
            </button>
          </div>
        </div>

        {/* Section Selection */}
        <div className="card">
          <h3 className="font-semibold mb-3">Select Section</h3>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedSection('all')}
              className={`w-full p-3 rounded-lg border text-left transition-all ${
                selectedSection === 'all'
                  ? 'border-primary bg-primary/10'
                  : 'border-border-inner hover:border-primary/50'
              }`}
            >
              <div className="font-medium">Full Test</div>
              <div className="text-sm text-text-secondary">All sections</div>
            </button>
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setSelectedSection(id)}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  selectedSection === id
                    ? 'border-primary bg-primary/10'
                    : 'border-border-inner hover:border-primary/50'
                }`}
              >
                <div className="font-medium">{label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Timing Options */}
        <div className="card">
          <h3 className="font-semibold mb-3">Timing</h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={extendedTime}
              onChange={(e) => setExtendedTime(e.target.checked)}
              className="w-5 h-5 rounded border-border-inner"
            />
            <div>
              <div className="font-medium">Extended Time (1.5x)</div>
              <div className="text-sm text-text-secondary">
                For students with accommodations
              </div>
            </div>
          </label>
          <div className="mt-3 p-3 bg-surface rounded-lg">
            <div className="text-sm text-text-secondary">
              Total time: {Math.round(getTiming() * (extendedTime ? 1.5 : 1))} minutes
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={startTest}
          disabled={!selectedExam}
          className="w-full btn btn-primary text-center disabled:opacity-50"
        >
          Start Test
        </button>
      </div>
    );
  }

  // Test Screen
  if (step === 'test' && currentQuestion) {
    return (
      <div className="space-y-4">
        {/* Timer Header */}
        <div className="sticky top-0 bg-background py-2 flex items-center justify-between">
          <button
            onClick={() => {
              if (confirm('Are you sure you want to end the test?')) {
                setStep('review');
              }
            }}
            className="text-sm text-text-secondary hover:text-text-primary"
          >
            End Test
          </button>
          <div
            className={`flex items-center gap-2 font-mono text-lg font-bold ${
              timeRemaining < 300 ? 'text-error' : ''
            }`}
          >
            <Clock size={20} />
            {formatTime(timeRemaining)}
          </div>
          <button
            onClick={handleFlag}
            className={`p-2 rounded-lg transition-colors ${
              flagged.includes(currentQuestion.id)
                ? 'bg-error/20 text-error'
                : 'hover:bg-surface'
            }`}
          >
            <Flag size={20} />
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span>Question {currentIndex + 1} of {testQuestions.length}</span>
          <div className="flex-1 progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / testQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Swipe Hint */}
        <p className="text-xs text-center text-text-secondary">
          Swipe left for next • Swipe right for previous
        </p>

        {/* Question - Draggable */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
          style={{ x }}
        >
          <div className="card">
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-surface border border-border-inner mb-3">
            {currentQuestion.section} - {currentQuestion.category}
          </span>
          <p className="text-lg mb-6">{currentQuestion.content}</p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.label)}
                className={`w-full p-4 rounded-lg border text-left transition-all ${
                  answers[currentQuestion.id] === option.label
                    ? 'border-primary bg-primary/10'
                    : 'border-border-inner hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface border border-border-inner flex items-center justify-center font-medium">
                    {option.label}
                  </span>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="btn btn-outline flex items-center gap-2 disabled:opacity-50"
          >
            <ChevronLeft size={18} />
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentIndex((i) => Math.min(testQuestions.length - 1, i + 1))
            }
            className="btn btn-primary flex items-center gap-2"
          >
            {currentIndex === testQuestions.length - 1 ? 'Review' : 'Next'}
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="card">
          <h4 className="font-medium mb-3">Question Navigator</h4>
          <div className="flex flex-wrap gap-2">
            {testQuestions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(i)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  i === currentIndex
                    ? 'bg-primary text-white'
                    : answers[q.id]
                    ? 'bg-success/20 text-success'
                    : flagged.includes(q.id)
                    ? 'bg-error/20 text-error'
                    : 'bg-surface hover:bg-border'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Review Screen
  if (step === 'review') {
    const answered = Object.keys(answers).length;
    const unanswered = testQuestions.length - answered;

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Review Answers</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-success">{answered}</div>
            <div className="text-sm text-text-secondary">Answered</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-error">{unanswered}</div>
            <div className="text-sm text-text-secondary">Unanswered</div>
          </div>
        </div>

        {unanswered > 0 && (
          <div className="flex items-center gap-3 p-4 bg-error/10 rounded-lg">
            <AlertCircle className="text-error" />
            <span className="text-sm">
              You have {unanswered} unanswered question{unanswered > 1 ? 's' : ''}.
            </span>
          </div>
        )}

        {flagged.length > 0 && (
          <div className="card">
            <h3 className="font-semibold mb-3">Flagged Questions</h3>
            <div className="flex flex-wrap gap-2">
              {flagged.map((qId) => {
                const idx = testQuestions.findIndex((q) => q.id === qId);
                return (
                  <button
                    key={qId}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setStep('test');
                    }}
                    className="px-3 py-1 bg-error/20 text-error rounded-lg text-sm"
                  >
                    Question {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={() => setStep('test')}
            className="flex-1 btn btn-outline"
          >
            Back to Test
          </button>
          <button onClick={submitTest} className="flex-1 btn btn-primary">
            Submit Test
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (step === 'results') {
    let correct = 0;
    testQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    const percentage = Math.round((correct / testQuestions.length) * 100);
    const estimatedScore = Math.round((percentage / 100) * 36);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Test Complete!</h2>
          <p className="text-text-secondary">Here are your results</p>
        </div>

        <div className="card text-center">
          <div className="text-6xl font-bold mb-2">{estimatedScore}</div>
          <div className="text-text-secondary">Estimated Score</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-success">{correct}</div>
            <div className="text-sm text-text-secondary">Correct</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-error">
              {testQuestions.length - correct}
            </div>
            <div className="text-sm text-text-secondary">Incorrect</div>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">Accuracy</h3>
          <div className="progress-bar h-4">
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>
          <div className="text-right text-sm text-text-secondary mt-1">
            {percentage}%
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/practice')}
            className="flex-1 btn btn-outline"
          >
            Done
          </button>
          <button
            onClick={() => {
              setStep('setup');
              setAnswers({});
              setFlagged([]);
              setCurrentIndex(0);
            }}
            className="flex-1 btn btn-primary"
          >
            New Test
          </button>
        </div>
      </div>
    );
  }

  return null;
}
