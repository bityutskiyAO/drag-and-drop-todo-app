import React from 'react'
import { AlignLeftOutlined } from '@ant-design/icons'

import './style.css'

export const ItemModalDescription = (props) => {
     return (
         <div className='modal-description-container'>
             <div className='modal-description-header'>
                 <AlignLeftOutlined style={ { marginRight: '13px', fontSize: '20px' } } />
                 <span >Описание</span>
             </div>
             <textarea className='modal-description-textarea' placeholder='Добавить более подробное описание' rows='2'>

             </textarea>
         </div>
     )
}
