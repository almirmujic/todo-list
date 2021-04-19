import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubmitButton = styled.button`
  all: unset;
  background: lightcyan;
  color: #333;
  font-size: 12px;
  padding: 0.5rem 1rem;
  border-radius: 9px;
  margin: 0.5rem;
  height: 50%;
`;

const StyledInput = styled.input`
  all: unset;
  font-size: 21px;
  padding: 0.3rem 0.8rem;
  border-radius: 9px;
`;

export default function Form({ handleSubmit, setTodo }) {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleChange}
        type="text"
        name="todo"
        id="todo"
        placeholder="What to do?"
      />
      <SubmitButton>Create Todo</SubmitButton>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setTodo: PropTypes.func.isRequired,
};
