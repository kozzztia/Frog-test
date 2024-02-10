import React from 'react';
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home/>
      </MainLayout>
    </div>
  );
}

export default App

