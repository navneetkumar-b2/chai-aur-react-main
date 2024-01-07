import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    
    // setCounter(counter + 1 )
    // setCounter(counter + 1 )
    // setCounter(counter + 1 )
    // setCounter(counter + 1 )

    // as `setCounter(counter + 1 )` is written 4 times but counter will be updated only once due to the react fibre we studied which executes in chunks
    // but the below(setCounter(prevCounter => prevCounter + 1 )) will increase counter by 4 because in first resolves the callback function written inside the setCounter then moves to the next code 
    // `prevCounter` last updated state lega
    // setCounter(() => {} )
    setCounter((v) => {return v*v*v} )
    setCounter((prevCounter) => {return prevCounter + 1} )  //all working the same 
    setCounter((prevCounter) => {return prevCounter + 1} )  //all working the same
    setCounter((count) => {return count + 1} )  //all working the same
    setCounter(prevCounter => prevCounter + 1 )             //all working the same
    setCounter(prevCounter => prevCounter + 1)              //all working the same
    setCounter(count => count + 1)              //all working the same
    
  }

  const removeValue = () => {
    if(!counter==0)
    setCounter(counter - 1)
  else
  alert("lower limit")
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}  //only reference is passed 
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
