import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

const ComponentC = () => {
  const PropsObj = useContext(MyContext)
  return (
    <div>
      <h3>ComponentC</h3>
      <h2>{PropsObj.count3}</h2>
      <button className='btn btn-info mx-2' onClick={()=>PropsObj.setCount3(prev=>prev+1)}>+</button>
      <button className='btn btn-info' onClick={()=>PropsObj.setCount3(prev=>prev-1)}>- </button>
    </div>
  )
}

export default ComponentC