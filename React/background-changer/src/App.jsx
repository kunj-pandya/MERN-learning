import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='flex flex-wrap justify-center gap-3 shadow-lg bg-red-500 px-3 py-2 rounded-full' onClick={() => setColor("red")}>red</button>
          <button className='flex flex-wrap justify-center gap-3 shadow-lg bg-green-500 px-3 py-2 rounded-full' onClick={() => setColor("green")}>green</button>
          <button className='flex flex-wrap justify-center gap-3 shadow-lg bg-blue-500 px-3 py-2 rounded-full' onClick={() => setColor("blue")}>blue</button>
          <button className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-500 px-3 py-2 rounded-full' onClick={() => setColor("yellow")}>yellow</button>
          <button className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-500 px-3 py-2 rounded-full' onClick={() => setColor("pink")}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
