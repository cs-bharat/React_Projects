import { useState } from 'react'


function App() {
 
  const [Color , setColor] = useState("black");


  return (
    <>
       <div className="w-full h-screen duration-200"  style={{backgroundColor:Color}}
       >
       <h1 className="text-center text-4xl pt-6 font-serif">Bgchanger Project </h1>
        <div className="fixed flex bottom-12 justify-center flex-wrap inset-x-0 
        px-2 
        ">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
           rounded-2xl">
              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"red"}}
              // onclick ke under call back fire kar sakte he //
              onClick={() => {
                setColor("red");
              }}
              >
                Red
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"green"}}
              onClick={() => {
                setColor("green");
              }}
              >
                Green
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"blue"}}
              onClick={() => {
                setColor("Blue");
              }}
              >
                Blue
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"grey"}}
              onClick={() => {
                setColor("grey");
              }}
              >
                Grey
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"pink"}}
              onClick={() => {
                setColor("pink");
              }}
              >
                Pink
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"purple"}}
              onClick={() => {
                setColor("purple");
              }}
              >
                Purple
              </button>


              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"Olive"}}
              onClick={() => {
                setColor("Olive");
              }}
              >
                Olive
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"Lavender"}}
              onClick={() => {
                setColor("Lavender");
              }}
              >
                Lavender
              </button>

              <button className="outline-none px-4 py-1 rounded-full text-white
              shadow-lg " 
              style={{backgroundColor:"orange"}}
              onClick={() => {
                setColor("orange");
              }}
              >
                Orange
              </button>
           </div>
        </div>
      
       </div>

    </>
  )
}

export default App
