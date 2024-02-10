import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={`/post`} element={<Post />}/>
      </Routes>       
    </Router>
  );
}

export default App

