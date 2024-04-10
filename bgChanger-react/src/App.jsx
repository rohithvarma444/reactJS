import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState('white')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1 className='text-center text-base sm:text-lg lg:text-xl py-4'>BackGround Color Changer App</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          
          <div className="flex flex-wrap justify-center w-full max-w-2xl space-x-4 rounded-sm	 py-2 ">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => setColor('blue')}>Blue</button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => setColor('red')}>Red</button>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => setColor('green')}>Green</button>
            <button className='bg-white hover:bg-white text-black font-bold py-2 px-4 rounded-full' onClick={() => setColor('white')}>White</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
