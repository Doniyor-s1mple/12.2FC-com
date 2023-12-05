import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

const ComponentB = () => {
  const PropsObj = useContext(MyContext)
  return (
    <div>
      <h3>ComponentB</h3>
      <h2>{PropsObj.count2}</h2>
      <button className='btn btn-info mx-2' onClick={()=>PropsObj.setCount2(prev=>prev+1)}>+</button>
      <button className='btn btn-info' onClick={()=>PropsObj.setCount2(prev=>prev-1)}>- </button>
    </div>
  )
}

export default ComponentB