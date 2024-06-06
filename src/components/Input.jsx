import React from 'react'
import './Input.css'

function Input({ name, placeholder }) {
  return (
    <div className='inputs'>
        <p>{name}</p>
        <input type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Input