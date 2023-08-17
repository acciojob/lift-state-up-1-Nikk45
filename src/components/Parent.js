import React from 'react'
import Child from './Child'

const Parent = ()=>{
    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child />
            <div className='modal'>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
            </div>
        </div>
    )
}

export default Parent