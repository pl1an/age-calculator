import React from 'react'
import Input from './Input'
import './Top.css'

function Top() {
  return (
    <div className='top'>
        <div className='top-inputs'>
            <Input name="DAY" placeholder="DD"/>
            <Input name="MONTH" placeholder="MM"/>
            <Input name="YEAR" placeholder="YYYY"/>
        </div>
        <div className='btn'><button>botao</button></div>
    </div>
  )
}

export default Top