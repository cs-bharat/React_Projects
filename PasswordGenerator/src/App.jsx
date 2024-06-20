import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed]  = useState(false);
  const [password , setPassword]  = useState();

  const passwordGenerator = useCallback(()=> {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "@!#$%^&*_+=?><|{}[]/";
    for (let i = 0; i <= length; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass = str.charAt(char);
        // console.log(pass);
      
    }
  
    setPassword(pass);
  },[length , numberAllowed ,charAllowed , setPassword])
 
  return (
    <>
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600">
    <h1 className='text-4xl text-center text-white my-5'>Password Generator </h1>
        <div className="flex shadow-md rounded-lg mb-4 overflow-hidden">
          <input 
          type="text"
          placeholder='password'
          className='  overflow-hidden  w-full py-2 px-3 text-3xl'
          value={password}
          readOnly
           />
           <button 
           className='bg-blue-700 px-3 py-0.5 text-white shrink-0'>copy</button>
        </div>

        <div className="flex text-sm gap-x-6 flex-wrap">
          <div className="flex item-center gap-x-1">
            <input
             type="range" 
             min={8}
             max={100}
             value={length}
             className="cursor-pointer"
             onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
             type="checkbox" 
             defaultChecked={numberAllowed}
             className="numberInput"
             onChange={()=>{setNumberAllowed((prev) => !prev)}}
             />
             <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
             type="checkbox" 
             defaultChecked={charAllowed}
             className="charactorInput"
             onChange={()=>{setCharAllowed((prev) => !prev)}}
             />
             <label htmlFor='CharactorInput'>Charactor</label>
          </div>

        </div>
    </div>
    </>
  )
}

export default App
