import './index.css';
import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import logo from './logo.svg';
import styles from './App.module.css';

const App = () => {
  useStyles(styles);

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
      </header>
      <p>
        This project generated by
        {' '}
        <strong>Rockpack</strong>
        . Please read official
        {' '}
        <a
          href="https://github.com/AlexSergey/rock"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>
        .
      </p>
    </div>
  );
};

export default App;
