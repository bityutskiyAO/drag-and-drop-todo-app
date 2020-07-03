import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CloseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { TodoBackground } from '../todo-background/todo-background'
import { bi1, bi2, bi3, bi4 } from '../../images'

import './style.css'
import { setBackgroundToElement } from '../../utils'

const stubBackground = [
    {
        theme: 'image',
        value: bi1
    },
    {
        theme: 'image',
        value: bi2
    },
    {
        theme: 'image',
        value: bi3
    },
    {
        theme: 'image',
        value: bi4
    },
    {
        theme: 'color',
        value: '026AA7'
    },
    {
        theme: 'color',
        value: 'B27B2C'
    },
    {
        theme: 'color',
        value: '4ABF6A'
    },
    {
        theme: 'color',
        value: 'f466ed'
    },
    {
        theme: 'color',
        value: ''
    }
]


export const NewTodoModal = (props) => {
    const { setShowModal } = props

    const [planTitle, setPlanTitle] = useState('')
    const [backgroundStyle, setBackgroundStyle] = useState({ theme: '', value: '' })

    const handleInputOnChange = (event) => {
        setPlanTitle(event.target.value)
    }

    const handleCloseBtnOnClick = () => {
        setPlanTitle('')
        setShowModal(false)
    }

    const handleBackgroundClick = (event) => {
        if (event.target.className === 'todo-modal') {
            setShowModal(false)
        }
    }

    const setBackground = (obj) => {
        const { theme, value } = obj
        setBackgroundStyle(obj)
        setBackgroundToElement('modal-container', theme, value)
    }

    return (
        <div className='todo-modal' onClick={ handleBackgroundClick }>
            <div className='todo-modal-all-content'>
                <div className='todo-modal-main-content'>
                    <div className='todo-modal-container' id='modal-container'>
                        <div className='todo-modal-first-line'>
                            <input type='text' className='todo-modal-input' onChange={ handleInputOnChange }
                                   placeholder='Заголовок плана' />
                            <CloseOutlined className='edit-todo-close' onClick={ handleCloseBtnOnClick } />
                        </div>
                    </div>
                    <div className='todo-backgrounds'>
                        {stubBackground.map((item) => {
                            return (
                                <TodoBackground
                                    key={ item.value }
                                    theme={ item.theme }
                                    value={ item.value }
                                    setBackground={ setBackground }
                                />
                            )
                        })}
                    </div>
                </div>
                <Link to={ `/todo/${planTitle}?backStyle=${backgroundStyle.theme}&backValue=${backgroundStyle.value}` } className='todo-modal-add-btn'>
                    <Button variant="primary"> Создать новый план </Button>{' '}
                </Link>
            </div>
        </div>
    )
}
