import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Message from './components/Message';

function App() {
  return (
   <div className="App">
    <Header/>
    <Home/>
    <Message/>
   </div>
  );
}

export default App;
