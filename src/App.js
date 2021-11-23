import './index.css';

let catigories=["profile", "education","projects", "langouges", "skills", "volintering", "contact info"]
let information=[{key:"name",value:"Yakov Bader"},{key:"adress",value:"Matityahu ......"},{key:"phone",value:"+972 53 734 4943"},{key:"linkin",value:"link"},{key:"email",value:"yakovbader@gmail.com"},{key:"github",value:"link........."}];

function App() {
  return (
    <div className="wraper">
      <div className="contact">
        <img className="profileImg"  src="https://media-exp1.licdn.com/dms/image/C4D03AQFZkI0q-ovt-g/profile-displayphoto-shrink_200_200/0/1627281231918?e=1642636800&v=beta&t=FIaafPVaOEzjQWxI3Jv8_jzxvxhztAi4Z_GmKU9bhGc"></img>
        <br />
        <div className="info">
          {information.map(function(info) {
            return  <p><b>{info.key}</b>:{info.value} </p>
          })}
        </div>
      </div> 
      <div className="profile">
        <h1><u>Who Am I</u></h1>
        <div>
          {catigories.map(function(catigory) {
              return  <p>{catigory} </p>
          })}
        </div>
      </div> 
    </div>
    
  );
}
export default App;
