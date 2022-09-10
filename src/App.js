import './App.css';
import { useState } from 'react';
import checkPrime from './checkPrime';

function App() {
  
  const [data, setData] = useState("");
  const [output,setOutput] = useState([]);
  
  const handleSubmit = () => {
    setOutput(checkPrime(data));
  }
  
  const handleReset = () =>{
    setData("");
    setOutput([]);
  }
  
  return (
    <div className="App">
      <nav>Prime Number Checker</nav>
      <header className="App-header">
        <p>
          Enter comma separated numbers
        </p>
        <input placeholder="1,2,3...." value={data} onChange={(e) => setData(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Check</button>
        <button onClick={handleReset}>Reset</button>
        {output.length!==0 && (
          output.map((item)=>(
            <div>{item}<br/></div>
          ))
        )}
      </header>
    </div>
  );
}

export default App;
