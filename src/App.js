import React from "react";
import TodoList from './todos/todo-list';
import "./App.css";
import { TodoProvider } from './todos/todo-context';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <TodoProvider>
      {/* anotherProvider */}
      <BrowserRouter>
      <div className="App">
        {/* NavBar */}
        <Router />
      </div>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
