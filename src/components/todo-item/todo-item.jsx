import React, { useState } from 'react'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { ADD_TODO_ITEM } from '../../constants'
import { Button } from 'react-bootstrap'

import './style.css'

export const TodoItem = (props) => {
    const { handleItemAdd, state,  } = props

    const [itemState, setItemState] = useState(state)
    const [itemTitle, setItemTitle] = useState('')

    const handleAddItemOnClick = () => {
        setItemState('edit')
    }

    const handleInputOnChange = (event) => {
        setItemTitle(event.target.value)
    }

    const handleCloseBtnClick = () => {
        setItemState('add')
    }

    const handleAddBtnOnClick = () => {
        handleItemAdd({ title: itemTitle })
        setItemState('add')
    }

    return (
        itemState === 'add' ?
        <div className='todo-add-item' onClick={ handleAddItemOnClick }>
            <PlusOutlined style={ { marginRight: 5 } } />
            {ADD_TODO_ITEM}
        </div>
        :
        <div className='todo-edit-item'>
            <textarea name='item-title' rows='5' cols='40' className='todo-edit-input' onChange={ handleInputOnChange }
                   placeholder="Введите заголовок" autoFocus={ true } />
            <div className='edit-todo-buttons'>
                <Button variant="success" className='edit-todo-add-btn' onClick={ handleAddBtnOnClick }>Добавить эллемент</Button>{' '}
                <CloseOutlined className='edit-todo-close' onClick={ handleCloseBtnClick } />
            </div>
        </div>
    )
}


