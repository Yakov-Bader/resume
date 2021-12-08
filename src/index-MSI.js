import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './project';
import Header from './header';

fetch();

ReactDOM.render(<Header />,document.getElementById('header'));


ReactDOM.render(<Projects />,document.getElementById('root'));
//ReactDOM.render(<App />,document.getElementById('root'));
