import React, { useContext } from 'react';
import styles from './EditModal.module.css';

import { Context } from '../../App';

export default function EditModal() {
  const { editedTodo, dispatch } = useContext(Context);

  return (
    <div className={styles.editModal}>
      Edit {editedTodo}
      <input type="text" value={editedTodo} />
      <button onClick={() => dispatch({ type: 'closeModal' })}>Close</button>
    </div>
  );
}
