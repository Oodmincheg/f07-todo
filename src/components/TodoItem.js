import React, { Fragment, useContext } from 'react';
import { Context } from '../App';

export default function TodoItem({ todo, deleteTodo }) {
  const { setEditModalOpened } = useContext(Context);

  return (
    <Fragment>
      <div>TODO: {todo.title}</div>
      <div>Priority: {todo.priority}</div>
      <div>Description: {todo.description}</div>
      <div>Date: {todo.date.toString()}</div>
      <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
      <button onClick={() => setEditModalOpened(true)}>Edit</button>
    </Fragment>
  );
}
