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
  const [startDate, setStartDate] = useState(new Date());

  const inputRef = useRef(null);
  const priorityRef = useRef(null);
  const descRef = useRef(null);

  function addTodo() {
    const newTodo = {
      id: uuid(),
      title: inputRef.current.value,
      priority: priorityRef.current.value,
      description: descRef.current.value,
      date: startDate,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = '';
    priorityRef.current.value = PRIORITY_VALUES.HIGH;
    descRef.current.value = '';
  }

  function deleteTodo(idToDelete) {
    const newTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(newTodos);
  }

  return (
    <>
      <input ref={inputRef} placeholder="Enter your todo" />
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
