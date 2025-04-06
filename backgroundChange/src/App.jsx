import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen'
    style={{
      backgroundColor: color 
    }}>

      <div className='fixed flex flex-wrap justify-center top-20 inset-x-0 px-2'>

        <div className='fixed flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg'>

          <button className='outline-none bg-red-400 rounded-full px-3 py-2' onClick={() => setColor("red")}>Red</button>
          <button className='outline-none bg-blue-400 rounded-full px-3 py-2' onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none bg-yellow-400 rounded-full px-3 py-2' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='outline-none bg-green-400 rounded-full px-3 py-2' onClick={() => setColor("green")}>Green</button>
          <button className='outline-none bg-pink-400 rounded-full px-3 py-2' onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
