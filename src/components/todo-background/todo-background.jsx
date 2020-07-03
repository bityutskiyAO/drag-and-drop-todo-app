import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export const TodoBackground = (props) => {
    const { theme, value, setBackground } = props

    return (
        <div
            className='todo-background-container'
            style={ theme === 'color' ? { backgroundColor: `#${value}` } : {
                backgroundImage: `url("${value}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } }
            onClick={ ()  => setBackground({ theme, value }) }
        >

        </div>
    )
}

TodoBackground.propTypes = {
    theme: PropTypes.string,
    value: PropTypes.string
}

TodoBackground.defaultProps = {
    theme: 'color',
    value: ''
}




