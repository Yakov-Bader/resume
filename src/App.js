import './index.css';

import {catigories,information} from './Data'

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
          return  <fieldset className='me'>
            <legend>{catigory.key}</legend>
            <p>{catigory.value}</p>
          </fieldset>
        })}
      </div>
    </div> 
    
  );
}
export default App;
