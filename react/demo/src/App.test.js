import React from "react";
import './App.css';
import TodoForm from './TodoForm';

import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <header>Todo List</header>
      <TodoForm />
    </div>
  );
}

export default App;