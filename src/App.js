import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import ToDoList from './components/ToDoList';
import Form from './components/Form';

function App() {
  const storedTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const [todos, setTodos] = useState(storedTodos);

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === '') return;
    const createdTodo = {
      id: uuidv4(),
      task: newTodo,
      completed: false,
    };
    setTodos((prevState) => [...prevState, createdTodo]);
    setNewTodo(' ');
  };

  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCompleted = (id) => {
    const newDos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newDos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form setTodo={setNewTodo} handleSubmit={handleSubmit} />
        <ToDoList
          deleteTodo={deleteTask}
          toggleCompleted={toggleCompleted}
          todos={todos}
        />
      </header>
    </div>
  );
}

export default App;
