
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

let [option,setOption] = useState("");

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="childOne">
          <h2>Child Component 1</h2>
          <button onClick={()=>setOption("Option 1")}>Option 1</button>
        </div>
        <div className="childTwo">
          <h2>Child Component 2</h2>
          <button onClick={()=>setOption("Option 2")}>Option 2</button>
        </div>

        <p>Selected Option: {option && option}</p>

    </div>
  )
}

export default App
