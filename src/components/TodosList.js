import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import 'react-datepicker/dist/react-datepicker.css';
import { EditModal } from './EditModal';

import { PRIORITY_VALUES } from '../consts';
import TodoForm from './TodoForm/TodoForm';

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
  const { editModalOpened } = useSelector((state) => state);

  const [state, dispatch] = useReducer(reducer, {
    todo: '',
    todos: [],
    startDate: new Date(),
    priority: '',
    description: '',
  });

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
      <TodoForm state={state} dispatch={dispatch} />
      {state.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
      {editModalOpened ? <EditModal /> : null}
    </>
  );
}
