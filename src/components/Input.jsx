import React from 'react'
import './Input.css'
import '../data_manager/manager'
import { update_data } from '../data_manager/manager'

function Input({ name, placeholder }) {
  return (
    <div className='inputs'>
        <p>{name}</p>
        <input type="text" placeholder={placeholder} onChange={evt => update_data(evt, name)}/>
    </div>
  )
}

export default Input