import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

import './style.css'
import { ADD_TODO } from '../../constants'

export const AddTodo = (props) => {

    const { setCardState } = props

    const handleCardOnClick = () => {
        setCardState('edit')
    }

    return (
        <div className='todo-card add-todo-container' onClick={ handleCardOnClick }>
            <PlusOutlined style={ { marginRight: 5 } } />
            {ADD_TODO}
        </div>
    )
}
