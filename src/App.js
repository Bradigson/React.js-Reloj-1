import React from 'react';
import './App.css';
import Neon from './NeaonLight/Neanlight'
const Clock = (props)=>{

  return(
    <div className="card text-center p-2 ">
      <div className="card-header">
        <h1>Digital Watch</h1>
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <h2 >{props.time.toLocaleTimeString()}</h2>
      </div>
      <div className="card-footer">
        <h3>
          Design by Bradigson Nuñez
        </h3>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <Clock time={new Date()}/> 
      <Neon/>
    </div>
  );
}

export default App;
