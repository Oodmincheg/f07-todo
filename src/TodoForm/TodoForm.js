import React from 'react';
import DatePicker from 'react-datepicker';
import { v4 as uuid } from 'uuid';

import { PRIORITY_VALUES } from '../consts';

export default function TodoForm({ state, dispatch }) {
  function addTodo(event) {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
      title: state.todo,
      priority: state.priority,
      description: state.description,
      date: state.startDate,
    };
    dispatch({ type: 'addNewTodo', payload: newTodo });
    dispatch({ type: 'reset' });
  }
  return (
    <form onSubmit={addTodo}>
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
      <button>Add</button>
    </form>
  );
}
