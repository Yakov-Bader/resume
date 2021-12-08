import './index.css';

let catigories=[{key:"profile",value:"Israeli American citizen, 19 years old, finishing BCs in Computer Sience in Ashkelon College....."}, {key:"education",value:"For high school Mesivta Beit Shemesh, afeter went for a nother 3 years in Beit Medrash Derech Chaim and Ashkelon college "}, {key:"langouges",value:"speak English and Hebrew native speaker, and a bit of Arabic"},{key:"volintering",value:"EMT MDA Israel, Yedidim volinteer"}]
let information=[{key:"name",value:"Yakov Bader"},{key:"adress",value:"Matityahu ......"},{key:"phone",value:"+972 53 734 4943"},{key:"linkin",value:"link"},{key:"email",value:"yakovbader@gmail.com"},{key:"github",value:"link........."}];

function App() {
  return (
    <div className="wraper">
      <div className="contact">
        <img className="profileImg"  src="https://media-exp1.licdn.com/dms/image/C4D03AQHyDGZE6hifNQ/profile-displayphoto-shrink_400_400/0/1638950777757?e=1644451200&v=beta&t=zS_gdCQ_m7fla9C1gTv-ZUlS7U_wkABOs44Nf2BVeEo" alt="Profile-IMG"></img>
        <br />
        <div className="info">
          {information.map(function(info) {
            return  <div><h3>{info.key}:</h3><h4>{info.value}</h4> </div>
          })}
        </div>
      </div> 
      <div className="profile">
        <h2><u>Who Am I</u></h2>
        {catigories.map(function(catigory) {
          return  <fieldset>
            <legend>{catigory.key}</legend>
            <p>{catigory.value}</p>
          </fieldset>
        })}
      </div>
    </div> 
    
  );
}
export default App;
