import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CloseOutlined } from '@ant-design/icons'

import './style.css'

export const EditListItem = (props) => {
    const { setNewItemData, setItemState } = props
    const [inputValue, setInputValue] = useState('')
    const handleAddBtnOnClick = () => {
        setNewItemData(inputValue)
        setItemState('add')
    }

    const handleInputOnChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleCloseBtnClick = () => {
        setItemState('add')
    }

    return (
        <div className='edit-list-container'>
            <textarea className='edit-list-input' onChange={ handleInputOnChange }  placeholder="Добавить эллемент" autoFocus={ true } />
            <div className='edit-list-buttons'>
                <Button variant="success" className='edit-list-add-btn' onClick={ handleAddBtnOnClick }>Добавить</Button>{' '}
                <CloseOutlined className='edit-list-close' onClick={ handleCloseBtnClick } />
            </div>
        </div>
    )
}
