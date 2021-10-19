import React, { useContext } from 'react';
import styles from './EditModal.module.css';

import { Context } from '../../App';

export default function EditModal() {
  const { setEditModalOpened } = useContext(Context);

  return (
    <div className={styles.editModal}>
      THIS IS EDIT MODAL
      <button onClick={() => setEditModalOpened(false)}>Close</button>
    </div>
  );
}
