import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

export default function ToDoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          task={todo.task}
          completed={todo.completed}
          id={todo.id}
          key={todo.id}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
