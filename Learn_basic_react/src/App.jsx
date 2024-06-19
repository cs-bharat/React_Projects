import { useState } from "react";

function App() {

  // let counter = 15;

  // one click se multiple jagah changes ho rahe ho tab .//
  let[counter , setCounter ] = useState(15);

  // interview ke liye //

  const addValue = ()=>{
    /* 
    esa karne se code aak banch of packege me hi ja raha he or
    ye es liye ho raha he ki use ye sab kam sem hi lag raha he 
    ui ,variable ko aak hi bar update karta he.. 15,16,17,18.. 

    setCounter(counter + 1 );
    setCounter(counter + 1 );
    setCounter(counter + 1 );
    setCounter(counter + 1 );
    */

    // 4 count increase at a time (only call back ke karan)//
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
  }

  // const addValue = ()=>{
  //   // counter = counter + 1;
  //   // console.log(counter)
  //   if(counter == 20){
  //     alert("maximum is counter 20")
  //      setCounter(counter)
  //   }else{
  //     setCounter(counter + 1);
  //   }   
  // }

  const removeValue = ()=>{
    // counter = counter - 1;
    // console.log(counter);
    if(counter == 0 ){
      alert("minimum is only 0 counter");
    }else{
      setCounter(counter - 1);
    }
    
  }

  return (
    <>
    <h1>chai or react</h1>
    <button
    onClick={addValue}>Add Counter : {counter}</button> <br />
    <button onClick={removeValue}>Remove counter : {counter}</button>
    <p>This is basic counter to understand react Hooks (useState)</p>
     <p>footer {counter}</p>

    </>
  )
}

export default App
