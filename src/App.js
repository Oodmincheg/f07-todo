import React, { createContext, useReducer } from 'react';
import TodoList from './components/TodosList';

export const Context = createContext({ defalut: 'default' });

// use context for edite todo & try to rewrite it to reducer
function reducer(state, action) {
  switch (action.type) {
    case 'openModal':
      return { ...state, editModalOpened: true, editedTodo: action.payload };
    case 'closeModal':
      return { ...state, editModalOpened: false, editedTodo: null };
    default:
      return { ...state };
  }
}
function App() {
  // const [editModalOpened, setEditModalOpened] = useState(false);
  // const [editedTodo, setEditedTodo] = useState();
  const [state, dispatch] = useReducer(reducer, {
    editModalOpened: false,
    editedTodo: null,
  });
  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <TodoList />
    </Context.Provider>
  );
}

export default App;
