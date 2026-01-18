import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import StudyMode from './pages/StudyMode';
import SimulateTest from './pages/SimulateTest';
import Flashcards from './pages/Flashcards';
import Lessons from './pages/Lessons';
import LessonView from './pages/LessonView';
import Resources from './pages/Resources';
import ResourceView from './pages/ResourceView';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="practice" element={<Practice />} />
          <Route path="practice/study" element={<StudyMode />} />
          <Route path="practice/simulate" element={<SimulateTest />} />
          <Route path="practice/flashcards" element={<Flashcards />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lessons/:lessonId" element={<LessonView />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:resourceId" element={<ResourceView />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
