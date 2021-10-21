import { createStore } from 'redux';

const initialState = {
  editModalOpened: false,
  editedTodo: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'openModal':
      return { ...state, editModalOpened: true, editedTodo: action.payload };
    case 'closeModal':
      return { ...state, editModalOpened: false, editedTodo: null };
    default:
      return { ...state };
  }
}

const store = createStore(reducer);

export default store;
