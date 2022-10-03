import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount =() => setCount(count+1);
  const decreaseCount =() => {
    if (count>0) {
      setCount(count-1);
    }
    else{alert("Only Positive Number Is alowed")}
  }
  return (
    <div className="App">
      <h3>Count : {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
