import React, { createContext, useState } from 'react';
import TodoList from './components/TodosList';

export const Context = createContext({ defalut: 'default' });

// use context for edite todo & try to rewrite it to reducer
function App() {
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [editedTodo, setEditedTodo] = useState();

  return (
    <Context.Provider
      value={{
        editModalOpened,
        setEditModalOpened,
        editedTodo,
        setEditedTodo,
      }}
    >
      <TodoList />
    </Context.Provider>
  );
}

export default App;
