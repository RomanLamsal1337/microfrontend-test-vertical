import React from 'react';
import ReactDOM from 'react-dom';
import { TestVertical } from './components';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TestVertical />
  </React.StrictMode>,
  document.getElementById('root')
);

export * from './components';
