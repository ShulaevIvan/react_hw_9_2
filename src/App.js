import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/posts/HomePage';
import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
