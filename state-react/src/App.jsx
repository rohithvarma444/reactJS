import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCount] = useState(0);
  const add = () => {
    setCount(counter+1);
  }
  const decrement = () => {
    setCount(counter -1);
  }
  const username = 'Rohith Varma';
  return (
    <>
      <h1>Learning React useState() <br /> by <i>{username}</i></h1>
      <h2>The value of the counter is {counter}</h2>
      <button onClick={add} >Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App