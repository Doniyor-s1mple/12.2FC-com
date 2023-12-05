import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

const ComponentD = () => {
  const PropsObj = useContext(MyContext)
  return (
    <div>
      <h3>ComponentD</h3>
      <h2>{PropsObj.count4}</h2>
      <button className='btn btn-info mx-2' onClick={() => PropsObj.setCount4(prev => prev + 1)}>+</button>
      <button className='btn btn-info' onClick={() => PropsObj.setCount4(prev => prev - 1)}>- </button>
    </div>
  )
}

export default ComponentD