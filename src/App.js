import React, { createContext } from 'react';
import TodoList from './components/TodosList';

export const Context = createContext({ defalut: 'default' });

function App() {
  return (
    <Context.Provider value={{ hello: 'hello' }}>
      <TodoList />
    </Context.Provider>
  );
}

export default App;
