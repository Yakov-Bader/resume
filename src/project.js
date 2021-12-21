import React from 'react';
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from "react-dom";
import './index.css';

import{catigory,projects} from './Data'

function Projects() {
  return (
    <div className="wraper">
      <div className="projects">
        <h2>Projects</h2>
        {projects.map(function(project) {
              return  <Project project={project}/>
        })}
      </div> 
      <div className="skills">
        <h2>My skills</h2>
          {catigory.map(function(skills) {
              return  <Skill skills={skills}/>
          })}
      </div>   
    </div>
    );
}
function Project({project}) {
  return (
    <div onClick={()=>openReadme(project)} className="project">
      <h4><u>{project.name}</u></h4>
      <a href={project.link}>project on GitHub</a>
    </div>
    );
}

function Skill({skills}) {
  return (
    <fieldset className='catigory'>
      <legend>{skills.cati}</legend>
      <ul >
        {skills.skills.map(function(skill){
          return <li>{skill}</li>
        })}
      </ul>
    </fieldset>
    
    );
}
function openReadme(info){
  let menu=document.getElementById('menu');
  if(menu.hasChildNodes()){
    if(menu.childNodes[0].className==='menu'){
      document.getElementById('menuIMG').classList.toggle("change");
      unmountComponentAtNode(menu);
      ReactDOM.render(<Readme info={info}/>,menu);
    }else{
      unmountComponentAtNode(menu);
    }  
  }else{
    ReactDOM.render(<Readme info={info}/>,menu);
  }
}
function Readme({info}){
  return(
    <div className='readme'>
      <div onClick={openReadme}>
        <div className="x x1"></div>
        <div className="x x2"></div>
      </div>
      <h2>{info.name}</h2>
      <h2>{info.text}</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Projects;
