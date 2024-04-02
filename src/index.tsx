// import ui libs
import React from 'react';
import ReactDOM from 'react-dom';
import { mergeStyles } from '@fluentui/react';

// import local files
import reportWebVitals from './reportWebVitals';
import Application from './Application';

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

// eslint-disable-next-line no-restricted-globals
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>, 
  document.getElementById('root')
);

// grap a reference to DOM element on page with ID 'root'
// const domNode = document.getElementById('root');
// render element into root holder
// ReactDOM.render(element, domNode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
