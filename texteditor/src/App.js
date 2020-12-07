import React from "react";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { EditorBlock } from 'draft-js';
import EditorPage from './components/editor';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Editor</h3>        
        <EditorPage />
      </header>
    </div>
  );
}

export default App;
