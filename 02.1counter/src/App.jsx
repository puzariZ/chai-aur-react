import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    // It will create it as a batch of same tasks and will update only once
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter+1)    // this will update the last value of the previous counter and will not use it as a batch
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
  }
  
  const decValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <div>
      <h1>Counter App: {counter}</h1>
    </div>
    <div>
      <button onClick={addValue}>Count++: {counter}</button>
      <br />
      <br />
      <button onClick={decValue}>Count--: {counter}</button>
    </div>
    <br />
    <div>
      <footer>Count: {counter}</footer>
    </div>
    </>
  )
}

export default App
