import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoItem({ todo, deleteTodo }) {
  const dispatch = useDispatch();

  function openEditModal() {
    dispatch({ type: 'openModal', payload: todo.title });
  }
  return (
    <Fragment>
      <div>TODO: {todo.title}</div>
      <div>Priority: {todo.priority}</div>
      <div>Description: {todo.description}</div>
      <div>Date: {todo.date.toString()}</div>
      <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
      <button onClick={openEditModal}>Edit</button>
    </Fragment>
  );
}
