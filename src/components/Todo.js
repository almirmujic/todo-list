import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoWrap = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    all: unset;
    background: lightcoral;
    font-size: 12px;
    padding: 0.5rem 1rem;
    border-radius: 9px;
    margin: 0.5rem;
    height: 50%;
  }
  &:hover {
    cursor: pointer;
  }
`;

const TodoItem = styled.div`
  display: flex;
`;

export default function Todo({
  task,
  id,
  completed,
  toggleCompleted,
  deleteTodo,
}) {
  return (
    <TodoWrap>
      <TodoItem onClick={() => toggleCompleted(id)} completed={completed}>
        <h4 style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {task}
        </h4>
      </TodoItem>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </TodoWrap>
  );
}

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
