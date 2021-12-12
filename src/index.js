import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './project';
import Header from './header';

const Data= require('./Data');


async  function getData(){
    await  fetch('http://localhost:5000/')
        .then(res =>res.json())
        .then(data => {
            Data.catigories=data[0];
            Data.information=data[1];
            Data.catigory =data[2];
            Data.projects=data[3];
            Data.infor=data[4];
        }); 
        
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Projects />,document.getElementById('root'));
    //ReactDOM.render(<App />,document.getElementById('root'));
}
getData();

