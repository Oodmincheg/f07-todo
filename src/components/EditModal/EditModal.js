import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './EditModal.module.css';

export default function EditModal() {
  const editedTodo = useSelector((state) => state.editedTodo);
  const dispatch = useDispatch();

  return (
    <div className={styles.editModal}>
      Edit {editedTodo}
      <input type="text" value={editedTodo} />
      <button onClick={() => dispatch({ type: 'closeModal' })}>Close</button>
    </div>
  );
}
