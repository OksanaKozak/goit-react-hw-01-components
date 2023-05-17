import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ?---------------------
const elem1 = <span>Hello</span>;
const elem2 = <span>world</span>;
const element = (<div>
  {elem1}
  {elem2}
</div>);
console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

