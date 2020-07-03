import React from 'react'
import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined'
import { Link } from 'react-router-dom'

import './style.css'

export const ToDoHeader = (props) => {
    const { title } = props
  return (
        <div className='todo-header'>
            <span>{title}</span>
            <Link to='/main'>
                <HomeOutlined style={ { color: 'black' } }  />
            </Link>
        </div>
    )
}
