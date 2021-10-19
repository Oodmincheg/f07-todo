import React, { Fragment, useContext } from 'react';
import { Context } from '../App';

export default function TodoItem({ todo, deleteTodo }) {
  const value = useContext(Context);
  console.log('value ===> ', value);
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
