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
    <div onClick={()=>openReadme(project)} className="proj project">
      <h4><u>{project}</u></h4>
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
  document.querySelectorAll('proj').forEach(function(pro){
    pro.classList.toggle('project');
    //pro.classList.toggle('project');
  })

  if(document.getElementById('menu').hasChildNodes()){
    unmountComponentAtNode(document.getElementById('menu'));
  }else{
    ReactDOM.render(<Readme info={info}/>,document.getElementById('menu'));
  }
}
function Readme({info}){
  return(
    <div className='readme'>
      <div onClick={openReadme}>
        <div className="x x1"></div>
        <div className="x x2"></div>
      </div>
      <h2>{info}</h2>
    </div>
  )
}

export default Projects;
