import React, { useState, useRef, Fragment } from 'react';
import { v4 as uuid } from 'uuid';

import TodoItem from './TodoItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PRIORITY_VALUES = {
  HIGH: 'high',
  MIDDLE: 'middle',
  LOW: 'low',
};

export default function TodoList() {
  console.log('render todo');

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  // const [error, setError] = useState(null);

  const priorityRef = useRef(null);
  const descRef = useRef(null);

  function addTodo() {
    // if (inputRef.current.value.length === 0) {
    //   setError('todo is required');
    //   return;
    // }
    // if (inputRef.current.value.length < 6) {
    //   setError('todo must be at least 6 chars');
    //   return;
    // }

    const newTodo = {
      id: uuid(),
      title: todo,
      priority: priorityRef.current.value,
      description: descRef.current.value,
      date: startDate,
    };

    setTodos([...todos, newTodo]);
    setTodo('');
    priorityRef.current.value = PRIORITY_VALUES.HIGH;
    descRef.current.value = '';
  }

  function deleteTodo(idToDelete) {
    const newTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(newTodos);
  }

  function handleTodoInput(event) {
    setTodo(event.target.value);
    // if (todo.length < 6) {
    //   setError('todo must be at least 6 chars');
    // } else {
    //   setError(null);
    // }
  }
  return (
    <>
      <input
        // style={error ? { border: '1px solid red' } : {}}
        onChange={handleTodoInput}
        placeholder="Enter your todo"
        value={todo}
      />
      {/* {Boolean(error) ? <div>{error}</div> : null} */}
      <br />
      <select ref={priorityRef}>
        <option value={PRIORITY_VALUES.HIGH}>High</option>
        <option value={PRIORITY_VALUES.MIDDLE}>Middle</option>
        <option value={PRIORITY_VALUES.LOW}>Low</option>
      </select>
      <br />
      <textarea ref={descRef} placeholder="Enter your description"></textarea>
      <br />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </>
  );
}
