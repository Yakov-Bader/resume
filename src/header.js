import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './project';

let catigories=["profile", "contact", "project", "skills"];


function Header() {
    return (
      <div>
        <button className="menuIMG" onClick={openMenu}></button>
        <h1 style={{marginTop: "10px"}}>Yakov Bader</h1>
      </div>   
    );
}
function Menu(){
    return (
        <div className="menu">
          {catigories.map(function(info) {
            return  <div onClick={() => GoTo(info)} className="title" >{info} </div>
          })}
        </div>
    );
}
function openMenu(){
  ReactDOM.render(<Menu />,document.getElementById('tt'));
}
function GoTo(info){
  if(info==="skills"||info==="project"){
    ReactDOM.render(<Projects />,document.getElementById('root'));
  }else{
    ReactDOM.render(<App />,document.getElementById('root'));
  }
  
}


export default Header;
  