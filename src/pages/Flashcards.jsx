import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Shuffle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import useStore from '../store/useStore';
import { flashcards, flashcardCategories } from '../data/flashcards';

const sections = [
  { id: 'math', label: 'Math', color: 'bg-lavender/20' },
  { id: 'english', label: 'English', color: 'bg-primary/20' },
  { id: 'reading', label: 'Reading', color: 'bg-bronze/30' },
  { id: 'science', label: 'Science', color: 'bg-rosewood/20' },
];

export default function Flashcards() {
  const navigate = useNavigate();
  const { reviewFlashcard } = useStore();

  const [step, setStep] = useState('select'); // 'select' | 'category' | 'practice'
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  // Touch/swipe state
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Filter flashcards
  useEffect(() => {
    if (selectedSection) {
      let filtered = flashcards.filter((f) => f.section === selectedSection);
      if (selectedCategory && selectedCategory !== 'all') {
        filtered = filtered.filter((f) => f.category === selectedCategory);
      }
      setDeck(filtered);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [selectedSection, selectedCategory]);

  const currentCard = deck[currentIndex];

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, deck.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const shuffleDeck = () => {
    setDeck((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (step !== 'practice') return;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        handleFlip();
      } else if (e.key === 'ArrowUp') {
        handleNext();
      } else if (e.key === 'ArrowDown') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, handleFlip, handleNext, handlePrevious]);

  // Handle drag/swipe
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;

    if (Math.abs(info.offset.x) > swipeThreshold) {
      // Horizontal swipe - flip card
      handleFlip();
    } else if (info.offset.y < -swipeThreshold) {
      // Swipe up - next card
      handleNext();
    } else if (info.offset.y > swipeThreshold) {
      // Swipe down - previous card
      handlePrevious();
    }

    controls.start({ x: 0, y: 0 });
  };

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
            <h2 className="text-2xl font-bold">Flashcards</h2>
            <p className="text-text-secondary">Select a section to study</p>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedSection('all');
            setSelectedCategory('all');
            setDeck(flashcards.sort(() => Math.random() - 0.5));
            setStep('practice');
          }}
          className="w-full card hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Shuffle size={24} className="text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Random Mix</h3>
              <p className="text-sm text-text-secondary">
                Shuffle all {flashcards.length} cards
              </p>
            </div>
          </div>
        </button>

        <div className="grid grid-cols-2 gap-4">
          {sections.map(({ id, label, color }) => (
            <button
              key={id}
              onClick={() => {
                setSelectedSection(id);
                setStep('category');
              }}
              className="card text-left hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-3`}>
                <span className="font-bold text-lg">{label[0]}</span>
              </div>
              <h3 className="font-semibold">{label}</h3>
              <p className="text-sm text-text-secondary">
                {flashcards.filter((f) => f.section === id).length} cards
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Category Selection
  if (step === 'category') {
    const categories = flashcardCategories[selectedSection] || [];
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
                  Review all {selectedSection} flashcards
                </p>
              </div>
              <span className="text-sm font-medium text-primary">
                {flashcards.filter((f) => f.section === selectedSection).length} cards
              </span>
            </div>
          </button>

          {categories.map((category) => {
            const count = flashcards.filter(
              (f) => f.section === selectedSection && f.category === category
            ).length;
            if (count === 0) return null;
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
                  <span className="text-sm text-text-secondary">{count} cards</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Practice Mode
  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No flashcards available.</p>
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
    <div className="space-y-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep('category')}
          className="p-2 hover:bg-surface rounded-lg transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm text-text-secondary">
          {currentIndex + 1} of {deck.length}
        </span>
        <button
          onClick={shuffleDeck}
          className="p-2 hover:bg-surface rounded-lg transition-colors"
          title="Shuffle deck"
        >
          <Shuffle size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* Instructions */}
      <p className="text-xs text-center text-text-secondary">
        Swipe left/right to flip • Swipe up/down to navigate
      </p>

      {/* Flashcard */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
          onClick={handleFlip}
          className="w-full max-w-md aspect-[3/4] cursor-pointer"
          style={{ x }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id + isFlipped}
              initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
              style={{ perspective: 1000 }}
            >
              <div
                className={`w-full h-full rounded-2xl border border-border shadow-lg p-6 flex flex-col items-center justify-center text-center ${
                  isFlipped ? 'bg-primary/10' : 'bg-surface'
                }`}
              >
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-xs px-2 py-1 rounded-full bg-background border border-border-inner">
                  {currentCard.category}
                </span>

                {/* Content */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-text-secondary">
                    {isFlipped ? 'Answer' : 'Question'}
                  </div>
                  <div className="text-xl font-medium whitespace-pre-wrap">
                    {isFlipped ? currentCard.back : currentCard.front}
                  </div>
                </div>

                {/* Flip Indicator */}
                <div className="absolute bottom-4 right-4">
                  <RotateCcw size={16} className="text-text-secondary" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 pb-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="btn btn-outline disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleFlip}
          className="btn btn-primary"
        >
          Flip
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === deck.length - 1}
          className="btn btn-outline disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
