import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'

import './style.css'
import { ADD_PLAN } from '../../constants'

export const MainCard = (props) => {
    const { theme, title, backgroundStyle, id = '', onClick, deleteMainCard } = props
    const { theme: backgroundTheme, value  } = backgroundStyle

    const [showCloseBtn, setShowBtn] = useState(false)

    const styles = backgroundTheme === 'image' ? {
        backgroundImage: `url("${value}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    } : {
        backgroundColor: `#${value}`
    }

    const handleDeleteBoard = () => {
        deleteMainCard(id)
    }

    return (
        theme === 'new' ?
            <div className="main-card" onClick={ onClick }>
                <PlusOutlined style={ { fontSize: 16, color: 'black', marginRight: 5 } } />
                { ADD_PLAN }
            </div>
            :
            <div style={ { position: 'relative' } } onMouseEnter={ () => setShowBtn(true) } onMouseLeave={ () => setShowBtn(false) }>
                <Link to={ `/todo/${id}?backStyle=${backgroundTheme}&backValue=${value}` } >
                    <span className='main-card-title'>{title}</span>
                    <div className="main-card" style={ theme === 'done' ? styles : void '' }>

                    </div>
                </Link>
                {showCloseBtn &&
                    <CloseOutlined className='delete-board-btn' onClick={ handleDeleteBoard } />
                }
            </div>

    )
}

MainCard.propTypes = {
    theme: PropTypes.string.isRequired,
    backgroundStyle: PropTypes.object
}

MainCard.defaultProps = {
    backgroundStyle: {
        theme: '',
        value: ''
    }
}
