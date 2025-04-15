import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxtz"

    if (numbersAllowed) {
      str += "0123456789"
    }

    if (charactersAllowed) {
      str+="!@#$%^&"
    }

    for (let i = 0; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
  }, [length, numbersAllowed, charactersAllowed, setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
            type="text"
            value ={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
           />
           <button onClick={copyToClipBoard} className='outline-none shrink-0 bg-blue-400 px-3 text-white'>Copy</button>
        </div>
        <div className='flex items-center space-x-4'>
          <label className='flex items-center space-x-1'>
            <span>Length</span>
            <input 
              type="range"
              name="range"
              min="1"
              max="20"
              value={length}
              class="slider"
              id="rangeSlider"
              onChange={(e)=>setLength(e.target.value)}
            />
            <span id="rangeValue" class="text-white font-semibold">{length}</span>
          </label>
          
          <label className='flex items-center space-x-1'>
            <span>Characters</span>
            <input 
              type="checkbox"
              name="charactersAllowed"
              value={charactersAllowed}
              onChange={()=>setCharacterAllowed((prev) => !prev)}
            />
          </label>

          <label className='flex items-center space-x-1'>
            <span>Numbers</span>
            <input 
              type="checkbox"
              name="NumbersAllowed"
              value={numbersAllowed}
              onChange={()=>setNumbersAllowed((prev) => !prev)}
            />
          </label>
          
        </div>

      </div>
    </>
  )
}

export default App
