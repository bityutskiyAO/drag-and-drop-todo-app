import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CloseOutlined } from '@ant-design/icons'

import './style.css'

export const EditTodo = (props) => {
    const { setNewCardsData, setCardState } = props
    const [inputValue, setInputValue] = useState('')
    const handleAddBtnOnClick = () => {
        setNewCardsData(inputValue)
        setCardState('add')
    }

    const handleInputOnChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleCloseBtnClick = () => {
        setCardState('add')
    }

    return (
        <div className='todo-card edit-todo-container'>
            <input type='text' className='edit-todo-input' onChange={ handleInputOnChange }  placeholder="Введите заголовок" autoFocus={ true } />
            <div className='edit-todo-buttons'>
                <Button variant="success" className='edit-todo-add-btn' onClick={ handleAddBtnOnClick }>Добавить список</Button>{' '}
                <CloseOutlined className='edit-todo-close' onClick={ handleCloseBtnClick } />
            </div>
        </div>
    )
}
