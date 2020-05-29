import React from 'react';
import './reset.css';
import styles from './app.module.css';

import { Home } from './views/Home';

function App() {
  return (
    <div className={ styles.wrapper }>
      <Home />
    </div>
  );
}

export default App;
