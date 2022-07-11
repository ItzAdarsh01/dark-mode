import React ,{useState}from "react";
import './App.css';

function App() {
  const[dark,setmode]=useState(false)
  return (
    <div className={dark?"App dark-mode":"App"}>
      <div className="nav">
      <label className="switch">
  <input type="checkbox" onChange={()=>setmode(!dark)}/>
  <span className="slider round"></span>
</label>
      </div>
      <div className="content">
        <h1>{dark?"dark mode is on":"dark mode is off"}<hr></hr></h1>
        <h2 >Enable dark mode using toggle button</h2>
      </div>
    </div>
  );
}

export default App;
