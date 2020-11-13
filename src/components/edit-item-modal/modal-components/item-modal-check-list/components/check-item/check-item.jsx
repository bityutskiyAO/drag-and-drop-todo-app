import React, { useState } from 'react'

import './style.css'

const CheckItem = (props) => {
    const { title } = props
    const [isDone, setDone] = useState(false)
    return (
        <div className={ isDone ? 'default-checkbox done-checkbox' : 'default-checkbox' } onClick={() => setDone(!isDone)}>
            <input id='check-box' type='checkbox' className='checkbox-item' checked={ isDone } />
            <span className='checkbox-text' >{ title }</span>
        </div>
    )
}

export default CheckItem
