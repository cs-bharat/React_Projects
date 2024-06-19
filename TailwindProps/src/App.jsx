
import './App.css'
import Card from './components/Card'

function App() {
  
  let TemaroryObject ={
    clientName : "user1",
    age : 20,
  }

  return (
    <>
      <div className="bg-green-800 , p-4 , rounded-xl text-center w-36 m-auto mt-5">Tailwind-Props</div>
      <Card UserName="chai or code" btnText="click me" objectPass={TemaroryObject}/>
      <Card UserName="herry" btnText="visit me"/>
    </>
  )
}

export default App
