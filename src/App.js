import './App.css'
import React,{useState} from 'react'

const App = () => {

  let [counter,setCounter]= useState(0);
  let stock=10;
  return (
    <center>
    <div className='wrapper'>
      <button class="minus" disabled={counter===0} onClick={()=>{
        if(counter>0){
          setCounter(counter-1)
        }
      }}>-</button>
      <p>{counter}</p>
      <button class="plus" disabled={counter===10} onClick={()=>{
        if(counter<stock){
          setCounter(counter+1)
        }
      }}>+</button>
    </div></center>
  )
}

export default App

