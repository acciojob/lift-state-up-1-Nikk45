import { divide } from 'cypress/types/lodash'
import React from 'react'

const Child = ()=>{
    return(
        <div className='child'>
            <h2>Child Component</h2>
            <button>Show Modal</button>
        </div>
    )
}

export default Child