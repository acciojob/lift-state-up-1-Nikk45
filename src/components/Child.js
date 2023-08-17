import { logDOM } from '@testing-library/react'
import { set } from 'lodash';
import React, { useState } from 'react'

const Child = ({setShowModal})=>{
    
    let [clicked, setClicked] = useState(false);
    // console.log(typeof setShowModal);

    const update = ()=>{
        setShowModal("true")
        if(clicked === false)
            setClicked(true)
        else
            setClicked(false)
    }

    return(
        <div className='child'>
            <h2>Child Component</h2>
            <button onClick={update}>Show Modal</button>
            <div className={ clicked === true ? 'active': 'modal'}>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
            </div>
        </div>
    )
}

export default Child