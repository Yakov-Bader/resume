import './index.css';

let Skills=["Java Script", "Java","Full stack develpment", "HTML", "CSS", "MongoDB", "SQL"]
let projects=["profile", "education","projects", "langouges", "skills", "volintering","sdfg"]

function Projects() {
  return (
    <div className="wraper">
      <div className="projects">
        <h1>Projects</h1>
        {projects.map(function(project) {
              return  <Project project={project}/>
        })}
      </div> 
      <div className="skills">
        <h1>My skills</h1>
        <ul>
          {Skills.map(function(skill) {
              return  <Skill skill={skill}/>
          })}
        </ul>
      </div>   
    </div>
    );
}
function Project({project}) {
  return (
    <div className="project">
      <h4><u>{project}</u></h4>
    </div>
    );
}

function Skill({skill}) {
  return (
    <li>{skill}</li>
    );
}


export default Projects;
