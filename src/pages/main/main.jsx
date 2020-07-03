import React, { useState } from 'react'

import { MainCard, NewTodoModal } from '../../components'

import './style.css'
import { bi4 } from '../../images'

export const MainPage = () => {

    const [isShowModal, setShowModal] = useState(false)

    const handleNewTodoClick = () => {
        setShowModal(true)
    }

    return (
        <div className='main-container'>
            <div className='main-cards'>
                <MainCard id='test'  theme='done' backgroundImg={ bi4 } title='test' />
                <MainCard theme='new' onClick={ handleNewTodoClick } />
            </div>
            {isShowModal &&
                <NewTodoModal setShowModal={ setShowModal } />
            }
        </div>
    )
}
