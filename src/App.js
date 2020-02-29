import React from 'react';
import './css/reset.css';
import styles from './css/app.module.css';

function App() {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <p>Stay calm, this is a test.</p>
      </div>
    </div>
  );
}

export default App;
