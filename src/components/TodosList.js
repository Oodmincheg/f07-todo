import React, { useState, useRef, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import TodoItem from './TodoItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PRIORITY_VALUES = {
  HIGH: 'high',
  MIDDLE: 'middle',
  LOW: 'low',
};

//function that return new state
// action {type, payload}
// reducer(currentState, {type, paylod})

function reducer(state, action) {
  switch (action.type) {
    case 'updateTodo':
      return { ...state, todo: action.payload };
    case 'updateTodos':
      return { ...state, todos: action.payload };
    case 'addNewTodo':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'updateStartDate':
      return { ...state, startDate: action.payload };
    case 'updatePriority':
      return { ...state, priority: action.payload };
    case 'updateDescription':
      return { ...state, description: action.payload };
    case 'reset':
      return {
        ...state,
        description: '',
        priority: PRIORITY_VALUES.HIGH,
        todo: '',
      };

    default:
      return state;
  }
}

export default function TodoList() {
  console.log('render todo');
  const [number, setNumber] = useState();

  const [state, dispatch] = useReducer(reducer, {
    todo: '',
    todos: [],
    startDate: new Date(),
    priority: '',
    description: '',
  });

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
      title: state.todo,
      priority: state.priority,
      description: state.description,
      date: state.startDate,
    };
    dispatch({ type: 'addNewTodo', payload: newTodo });
    dispatch({ type: 'reset' });
    // dispatch({ type: 'updateTodo', payload: '' });
    // dispatch({ type: 'updatePriority', payload: PRIORITY_VALUES.HIGH });
    // dispatch({ type: 'updateDescription', payload: '' });
  }

  function deleteTodo(idToDelete) {
    const newTodos = state.todos.filter((todo) => todo.id !== idToDelete);
    dispatch({ type: 'updateTodos', payload: newTodos });
  }

  // function handleTodoInput(event) {
  //   disp(event.target.value);
  // if (todo.length < 6) {
  //   setError('todo must be at least 6 chars');
  // } else {
  //   setError(null);
  // }
  // }

  return (
    <>
      <input
        // style={error ? { border: '1px solid red' } : {}}
        onChange={(event) =>
          dispatch({ type: 'updateTodo', payload: event.target.value })
        }
        placeholder="Enter your todo"
        value={state.todo}
      />
      {/* {Boolean(error) ? <div>{error}</div> : null} */}
      <br />
      <select
        value={state.priority}
        onChange={(event) =>
          dispatch({ type: 'updatePriority', payload: event.target.value })
        }
      >
        <option value={PRIORITY_VALUES.HIGH}>High</option>
        <option value={PRIORITY_VALUES.MIDDLE}>Middle</option>
        <option value={PRIORITY_VALUES.LOW}>Low</option>
      </select>
      <br />
      <textarea
        value={state.description}
        onChange={(event) =>
          dispatch({ type: 'updateDescription', payload: event.target.value })
        }
        placeholder="Enter your description"
      ></textarea>
      <br />
      <DatePicker
        selected={state.startDate}
        onChange={(date) =>
          dispatch({ type: 'updateStartDate', payload: date })
        }
      />
      <br />
      <button onClick={addTodo}>Add</button>
      {state.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </>
  );
}
