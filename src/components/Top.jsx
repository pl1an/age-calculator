import React from 'react'
import Input from './Input'
import './Top.css'
import { send_button } from '../data_manager/manager'


function Top({changefunction}){
  return (
    <div className='top'>
        <div className='top-inputs'>
            <Input name="DAY" placeholder="DD"/>
            <Input name="MONTH" placeholder="MM"/>
            <Input name="YEAR" placeholder="YYYY"/>
        </div>
        <div className='btn' onClick={() => changefunction(send_button())}>
          <button>
          <span className="material-icons">south</span>
          </button>
        </div>
    </div>
  )
}

export default Top