import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="quiz-box">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:level" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
