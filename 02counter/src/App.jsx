import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [counter, setCounter] = useState(10);
  let counter = 10;

  const addValue = () => {
    counter = counter + 1;
    console.log("counter pressed",counter,Math.random() * 100);
  };

  const decValue = () => {
    counter = counter - 1;
    console.log("counter pressed",counter,Math.random() * 100);
  };

  return (
    <>
    <h1>Chai or React</h1>
    <h2>Counter_Value {counter}</h2>
    <button onClick={addValue}>Increase_Counter {counter}</button>
    <br />
    <br />
    <button onClick={decValue}>Decrease_Counter {counter}</button>
    <h3>footer {counter}</h3>
    </>
  )
}

export default App
