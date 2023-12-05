import React from 'react'
import { MyContext } from '../App'
import { useContext } from 'react'

const ComponentA = () => {
  const ProbsObj = useContext(MyContext)

  return (    
    <div className='row'>
      <div className="col-md-12">
        <div className="card bg-dark text-light">
          <div className="card-header">
            <h3>ComponentA</h3>
          </div>
          <div className="card-body">
            <h2>{ProbsObj.count1}</h2>
            <button className='btn btn-info mx-2' onClick={()=>ProbsObj.setCount1(prev => prev + 1)}>+</button>
            <button className='btn btn-info ' onClick={()=>ProbsObj.setCount1(prev => prev - 1)}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentA