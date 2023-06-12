import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [Challenge, setChallenge] = useState("");
  const truth = async () => {
    /*
    * Note to Ryan:
    * Change the "type" attribute based on what you want:
    * "truth" = truth
    * "dare" = dare
    * "wyr" = would you rather
    * "nhie" = never have i ever
    * "paranoia" = paranoia
    */
    let info = {
      type: "truth"
    };
    let response = await axios.post("http://localhost:3000/",{ info });
    console.log("response: ", response);
    setChallenge(response.data.question);
  }

  const dare = async () => {
    let info = {
      type: "dare"
    };
    let response = await axios.post("http://localhost:3000/",{ info });
    console.log("response: ", response);
    setChallenge(response.data.question);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🌹Truth/Dare Gamez🌹</h1>
        <button className='Truth' onClick={truth} > Truth </button>
        <button className='Dare' onClick={dare}> Dare </button>
        <p className="Prompt"> Your Challenge</p>
        <p className='Challenge'> {Challenge} </p>
      </header>
    </div>
  );
}

export default App;
