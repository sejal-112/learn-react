import { useState } from 'react'
import './App.css'

function App() {
 const [counter, setCounter] = useState(0);

 const addValue = () =>{
  if(counter < 11){
    setCounter(counter+1);
  }
  
 }
 const removeValue = () =>{
  if(counter > 0){
    setCounter(counter-1);
  } 
 }

  return (
    <>
    <h1>The React Library</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
   <br />
    <button onClick ={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
