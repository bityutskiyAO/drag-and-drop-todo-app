import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'

import './style.css'
import { ADD_PLAN } from '../../constants'

export const MainCard = (props) => {
    const { theme, title, backgroundImg, id = '', onClick } = props

    return (
        theme === 'new' ?
            <div className="main-card" onClick={ onClick }>
                <PlusOutlined style={ { fontSize: 16, color: 'black', marginRight: 5 } } />
                { ADD_PLAN }
            </div>
            :
            <Link to={ `/todo/${id}` }>
                <span className='main-card-title'>{title}</span>
                <div className="main-card" style={ theme === 'done' ? {
                    backgroundImage: `url("${backgroundImg}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                } : void '' }>

                </div>
            </Link>
    )
}

MainCard.propTyeps = {
    theme: PropTypes.string.isRequired
}
