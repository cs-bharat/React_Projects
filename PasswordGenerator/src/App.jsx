import { useCallback, useState ,useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed]  = useState(false);
  const [password , setPassword]  = useState();


  // --------- useCallback--------
  // useCallback (memoize) karne ke liye responsible he, optimize karta he ,cache me rakta he.
  // method ko optimize karta he(method dubar run ho to)
  const passwordGenerator = useCallback(()=> {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "@!#$%^&*_+=?><|{}[]/";
    for (let i = 1; i <= length; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass = pass + str.charAt(char);
        // console.log(pass);
      }
  
    setPassword(pass);
  },[length , numberAllowed ,charAllowed , setPassword])
 
  

  //----------- useEffect ------- //
  // passwordGenerator ko call karne ke liye (useEffect) hooks ka used karunga
  // useEffect(()=>{} , [dependancy]) // syntax he hooks.
 // eski dependency me kuch bhi change ho to dubara se run kardo.,

  useEffect(()=>{
    passwordGenerator(); 
    // (passwordGenerator ko call karenge bina (useEffect) ke to error aayga .)
  } , [length,numberAllowed , charAllowed , passwordGenerator])

  //  all hooks me (dependency) me changes hoga to (hooks) re run honge ..


   // useRef//
    // useRef hooks (reference pass karna ho tab)//


    const passwordRef = useRef(null);

    const copyPasswordClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,8) // kuch range me hi select karna ho tab
    // copy text  effect//
    window.navigator.clipboard.writeText(password);
  } , [password])

  
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
          ref={passwordRef}
           />

           <button 
           onClick={copyPasswordClipBoard}
           className='bg-blue-700 px-3 py-0.5 text-white shrink-0'>copy</button>
        </div>

        <div className="flex text-sm gap-x-6 flex-wrap">
          <div className="flex item-center gap-x-1">
            <input
             type="range" 
             min={8}
             max={30}
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
