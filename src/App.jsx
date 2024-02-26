import reactLogo from "./assets/react.svg";
import { useState } from "react";
import "./App.css";

function App() {
let [counter, setCounter] = useState(15)
const addValue =()=>{

  setCounter(counter+1)

}
const removeValue=()=>{
  setCounter(counter-1)
}
  
  return (
    <>
      <h1>Add or Remove of value</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
      <p>footer  :{counter}</p>
    </>
  );
}

export default App;
