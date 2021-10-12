import React, { Fragment } from 'react';

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <Fragment>
      <div>TODO: {todo.title}</div>
      <div>Priority: {todo.priority}</div>
      <div>Description: {todo.description}</div>
      <div>Date: {todo.date.toString()}</div>
      <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
    </Fragment>
  );
}
