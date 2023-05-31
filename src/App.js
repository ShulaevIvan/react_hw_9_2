import './App.css';
import { Context }  from "./context";
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/posts/HomePage';
import CreatePost from './components/posts/CreatePost';
import PostView from './components/posts/PostView';

function App() {
  const initialState = {posts: [], loading: true, appUrl: 'http://localhost:3000/'};
  const [postsState, setPostsState] = useState(initialState);
  return (
    <div className="App">
      <Context.Provider value={{state: postsState, setState: setPostsState } }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path='/posts/'>
          <Route path=':id' element={<PostView />} />
        </Route>
        
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
