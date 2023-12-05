import React from 'react'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'

const FirstComponent = () => {
    return (
        <div className='row my-5'>
            <h1 className='text-warning text-center mb-5'>FirstComponent</h1>
            <div className="col-md-9">
                <div className="card bg-dark border-light text-light">
                    <div className="card-header text-center">
                        <h3><ComponentA /></h3>
                    </div>
                </div>

                <div className="card bg-dark border-light text-light my-5">
                    <div className="card-header text-center">
                        <h3><ComponentB /></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent