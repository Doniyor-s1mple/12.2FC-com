import React from 'react'
import ComponentC from './Components/ComponentC'
import ComponentD from './Components/ComponentD'

const SecondComponent = () => {
    return (
        <div className='row my-5'>
            <h1 className='text-warning text-center mb-5'>SecondComponent</h1>
            <div className="col-md-9">
                <div className="card bg-dark border-light text-light">
                    <div className="card-header text-center">
                        <h3><ComponentC /></h3>
                    </div>
                </div>

                <div className="card bg-dark border-light text-light my-5">
                    <div className="card-header text-center">
                        <h3><ComponentD /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent