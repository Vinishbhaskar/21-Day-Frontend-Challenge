import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="quiz-box">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:level" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
