import React from 'react'
import BottomParts from './BottomParts'

const Bottom = () => {
  return (
    <div className='bottom'>
      <BottomParts name="years" number={"--"}/>
      <BottomParts name="months" number={"--"}/>
      <BottomParts name="days" number={"--"}/>
    </div>
  )
}

export default Bottom