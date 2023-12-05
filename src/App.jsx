import React from 'react'
import { useState } from 'react'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import { createContext } from 'react'

export const MyContext = createContext()

const App = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)


    var Plus = () => {
        setCount1(prev => prev + 1)
        setCount2(prev => prev + 1)
        setCount3(prev => prev + 1)
        setCount4(prev => prev + 1)
    }
    var Minus = () => {
        setCount1(prev => prev - 1)
        setCount2(prev => prev - 1)
        setCount3(prev => prev - 1)
        setCount4(prev => prev - 1)
    }
    return (
        <MyContext.Provider value={
            {
                count1, count2, count3, count4,
                setCount1,
                setCount2,
                setCount3,
                setCount4
            }
        }>
            <div className='container my-5'>
                <div className="row my-2">
                    <div className="col-4 offset-4">
                        <button className='btn btn-outline-info px-5' onClick={Plus}>-</button>
                        <button className='btn btn-outline-info px-5' onClick={Minus}>+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 border border-warning">
                        <FirstComponent />
                    </div>
                    <div className="col-md-5 mx-5 border border-warning">
                        <SecondComponent />
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    )
}
export default App