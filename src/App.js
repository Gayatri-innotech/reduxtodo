import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
      <br></br>
      <h2 className="header">Todo App</h2>
      <Form/>
      <Todos/>
    </div>
  );
}

export default App;
