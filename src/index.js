import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './project';
import Header from './header'

fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(data => alert(data));

ReactDOM.render(<Header/>,document.getElementById('header'));


ReactDOM.render(<Projects />,document.getElementById('root'));

//ReactDOM.render(<App />,document.getElementById('root'));
