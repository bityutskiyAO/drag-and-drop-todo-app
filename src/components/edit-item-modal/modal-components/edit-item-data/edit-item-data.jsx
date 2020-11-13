import React from 'react'

import './style.css'

export const EditItemData = (props) => {

    const { children ,title } = props

    return (
        <div className='edit-item-data-container'>
            {children}
            <span className='edit-item-data-title' >{title}</span>
        </div>
    )
}
