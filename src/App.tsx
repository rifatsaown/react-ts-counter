import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increasing = () =>setCount(count+1);
  const decreasing = () =>{
    if (count>0) {
      setCount(count-1);
    }
    else {alert("Value Can't be less than 0");}
  }
  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button onClick={decreasing} >Decreasing -</button>
     <button onClick={increasing} >Increasing +</button>
     
    </div>
  );
}


export default App;
