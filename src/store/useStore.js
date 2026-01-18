import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // User state
      user: {
        name: 'Student',
        avatar: null,
        targetScore: 32,
        testDate: null,
        settings: {
          extendedTime: false,
          darkMode: false,
        },
      },

      // Progress tracking
      progress: {
        lessonsCompleted: [],
        questionsAnswered: [],
        mockTestsTaken: [],
        flashcardsReviewed: [],
        totalStudyTime: 0,
      },

      // Current session state
      currentSession: {
        mode: null, // 'study' | 'simulate'
        section: null,
        category: null,
        questionIndex: 0,
        answers: {},
        flaggedQuestions: [],
        startTime: null,
        timeRemaining: null,
      },

      // Actions
      setUser: (userData) =>
        set((state) => ({
          user: { ...state.user, ...userData },
        })),

      updateSettings: (settings) =>
        set((state) => ({
          user: {
            ...state.user,
            settings: { ...state.user.settings, ...settings },
          },
        })),

      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.user.settings.darkMode;
          document.documentElement.classList.toggle('dark', newDarkMode);
          return {
            user: {
              ...state.user,
              settings: { ...state.user.settings, darkMode: newDarkMode },
            },
          };
        }),

      // Lesson progress
      completeLesson: (lessonId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            lessonsCompleted: state.progress.lessonsCompleted.includes(lessonId)
              ? state.progress.lessonsCompleted
              : [...state.progress.lessonsCompleted, lessonId],
          },
        })),

      // Question progress
      recordAnswer: (questionId, answer, isCorrect, timeSpent) =>
        set((state) => ({
          progress: {
            ...state.progress,
            questionsAnswered: [
              ...state.progress.questionsAnswered,
              {
                questionId,
                answer,
                isCorrect,
                timeSpent,
                timestamp: Date.now(),
                mode: state.currentSession.mode,
              },
            ],
          },
        })),

      // Mock test
      recordMockTest: (testData) =>
        set((state) => ({
          progress: {
            ...state.progress,
            mockTestsTaken: [...state.progress.mockTestsTaken, testData],
          },
        })),

      // Flashcard progress
      reviewFlashcard: (cardId, known) =>
        set((state) => ({
          progress: {
            ...state.progress,
            flashcardsReviewed: [
              ...state.progress.flashcardsReviewed,
              { cardId, known, timestamp: Date.now() },
            ],
          },
        })),

      // Session management
      startSession: (mode, section, category) =>
        set({
          currentSession: {
            mode,
            section,
            category,
            questionIndex: 0,
            answers: {},
            flaggedQuestions: [],
            startTime: Date.now(),
            timeRemaining: null,
          },
        }),

      setQuestionIndex: (index) =>
        set((state) => ({
          currentSession: { ...state.currentSession, questionIndex: index },
        })),

      setAnswer: (questionId, answer) =>
        set((state) => ({
          currentSession: {
            ...state.currentSession,
            answers: { ...state.currentSession.answers, [questionId]: answer },
          },
        })),

      toggleFlag: (questionId) =>
        set((state) => ({
          currentSession: {
            ...state.currentSession,
            flaggedQuestions: state.currentSession.flaggedQuestions.includes(questionId)
              ? state.currentSession.flaggedQuestions.filter((id) => id !== questionId)
              : [...state.currentSession.flaggedQuestions, questionId],
          },
        })),

      setTimeRemaining: (time) =>
        set((state) => ({
          currentSession: { ...state.currentSession, timeRemaining: time },
        })),

      endSession: () =>
        set({
          currentSession: {
            mode: null,
            section: null,
            category: null,
            questionIndex: 0,
            answers: {},
            flaggedQuestions: [],
            startTime: null,
            timeRemaining: null,
          },
        }),

      // Update study time
      addStudyTime: (minutes) =>
        set((state) => ({
          progress: {
            ...state.progress,
            totalStudyTime: state.progress.totalStudyTime + minutes,
          },
        })),

      // Computed values
      getOverallProgress: () => {
        const state = get();
        const totalLessons = 56; // 8 weeks * 7 days
        return Math.round(
          (state.progress.lessonsCompleted.length / totalLessons) * 100
        );
      },

      getScoreBySection: (section) => {
        const state = get();
        const sectionAnswers = state.progress.questionsAnswered.filter(
          (a) => a.section === section
        );
        if (sectionAnswers.length === 0) return null;
        const correct = sectionAnswers.filter((a) => a.isCorrect).length;
        return Math.round((correct / sectionAnswers.length) * 100);
      },

      getEstimatedScore: () => {
        const state = get();
        const mockTests = state.progress.mockTestsTaken;
        if (mockTests.length === 0) return null;
        const lastTest = mockTests[mockTests.length - 1];
        return lastTest.compositeScore;
      },

      getCategoryPerformance: () => {
        const state = get();
        const byCategory = {};
        state.progress.questionsAnswered.forEach((answer) => {
          if (!answer.category) return;
          if (!byCategory[answer.category]) {
            byCategory[answer.category] = { correct: 0, total: 0 };
          }
          byCategory[answer.category].total++;
          if (answer.isCorrect) byCategory[answer.category].correct++;
        });

        return Object.entries(byCategory).map(([category, data]) => ({
          category,
          percentage: Math.round((data.correct / data.total) * 100),
          total: data.total,
        }));
      },
    }),
    {
      name: 'actualize-storage',
      partialize: (state) => ({
        user: state.user,
        progress: state.progress,
      }),
    }
  )
);

export default useStore;
