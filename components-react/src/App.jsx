import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-violet-500'>Vite + React</h1> <br />
      < Card name="Ram" post="Student" state="India"/>
      <br />
      < Card name="Rohith" post="Student" state="India" />
      <br />
      < Card />
    </>
  )
}

export default App
