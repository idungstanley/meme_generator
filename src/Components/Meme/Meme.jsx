import React, { useState } from 'react'
import CounterBtn from '../Counter/CounterBtn'
import './meme.css'

export default function Meme() {
  const [addArray, setArray] = useState(['Things 1', 'Things 2'])
  const [formData, setformData] = useState({
    topText: '',
    bottomText: '',
  })
  function handleChange(event) {
    const { name, value } = event.target
    setformData((prevformData) => {
      return {
        ...prevformData,
        [name]: value,
      }
    })
  }
  console.log(formData);
  function addElement() {
    setArray((prevArray) => {
      return [...prevArray, `Things ${prevArray.length + 1}`]
    })
  }

  const thingsElements = addArray.map((arrayElement) => (
    <p className='text' key={arrayElement}>
      {arrayElement}
    </p>
  ))
  return (
    <main>
      <div className='form'>
        <input
          type='text'
          className='meme--input'
          placeholder='Top text'
          value={formData.topText}
          name= 'topText'
          onChange={handleChange}
        />
        <input
          type='text'
          className='meme--input'
          placeholder='Bottom text'
          value={formData.bottomText}
          name= 'bottomText'
          onChange={handleChange}
        />
        <button className='meme--btn' onClick={addElement}>
          Get a new meme image ✨
        </button>
        {thingsElements}
      </div>
      <CounterBtn />
    </main>
  )
}
