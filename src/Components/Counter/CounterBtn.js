import Counter from './Counter'
import './counter.css'
import React, { useState } from "react"

export default function CounterBtn() {
const [count , setCount] = useState(0)
function addCount(){
 setCount(prevCount=> prevCount + 1)
}
function subCount(){
 setCount(prevCount => prevCount - 1)
}
  return (
    <div>
      <button className='addBtn' onClick={addCount}>+</button>
      <Counter count= {count}/>
      <button className='subtractBtn' onClick={subCount}>-</button>
    </div>
  )
}
