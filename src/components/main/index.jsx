import React from 'react';

import styles from './styles.css';

export default function App() {
  const time = Date.now();

  return (
    <div className={styles.root}>Мое приложение {time}</div>
  );
}
