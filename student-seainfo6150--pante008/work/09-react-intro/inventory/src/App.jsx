import React, {useState} from 'react';
import Reorder from './Reorder';
import  './App.css';


function App() {
  const [counter, setCounter] = useState(1);
 
  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {    
    setCounter(Math.max(0,counter - 1));
  }

  const reorderFunction = () => {
    setCounter(5);
  }
    
  return (
    <main className="app-container"> 
      <h2 >Inventory App </h2>
      <p className="text">Counter Value = {counter}</p>
      <div className="inventory-container"> 
          <button className="btn" onClick = {incrementCounter}> + </button>
          <button className="btn" disabled={!counter} onClick = {decrementCounter}> - </button>
          {
            counter === 0 ? <Reorder onReorder = {reorderFunction}/>  : ""
          }
      </div>
    </main>
  );
} 
export default App
