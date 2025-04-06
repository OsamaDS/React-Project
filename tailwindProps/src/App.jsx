import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '../components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let userDetails = {
    'name': 'Usama'
  }
  let userDetail2 = {
    'name': 'Saad'
  }

  return (
    <>

      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card username={userDetails} />
      <Card username={userDetail2}/>
    </>
  )
}

export default App
