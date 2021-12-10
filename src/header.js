import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './project';
import { unmountComponentAtNode } from "react-dom";

import {infor} from './Data'

function Header() {
  return (
    <div className="header">
      <div id='menuIMG' onClick={openMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <h1 style={{marginTop: "10px"}}>Yakov Bader</h1>
    </div>   
  );
}
function Menu(){
    return (
        <div className="menu">
          {infor.map(function(info) {
            return  <button onClick={() => GoTo(info)} className="title" >{info} </button>
          })}
        </div>
    );
}
function openMenu(){
  if(document.getElementById('menu').hasChildNodes()){
    unmountComponentAtNode(document.getElementById('menu'));
  }else{
    ReactDOM.render(<Menu />,document.getElementById('menu'));
  }
  document.getElementById('menuIMG').classList.toggle("change");
}
function GoTo(info){
  document.getElementById('menuIMG').classList.toggle("change");
  unmountComponentAtNode(document.getElementById('menu'));
  if(info==="skills"||info==="project"){
    ReactDOM.render(<Projects />,document.getElementById('root'));
  }else{
    ReactDOM.render(<App />,document.getElementById('root'));
  }
  
}


export default Header;
  