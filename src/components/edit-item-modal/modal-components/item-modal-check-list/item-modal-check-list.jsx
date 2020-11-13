import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CheckSquareOutlined } from '@ant-design/icons'
import { EditListItem } from './components/edit-list-item/edit-list-item'
import CheckItem from './components/check-item/check-item'

import './style.css'

export const ItemModalCheckList = (props) => {

    const [itemState, setItemState] = useState('edit')
    const [itemsArray, setNewItem] = useState([])

    const setNewItemData = (data) => {
        setNewItem([
            ...itemsArray,
            { title: data }
        ])
    }

    const handleAddBtnOnClick = () => {
        setItemState('edit')
    }

    return (
        <div className='modal-check-list-container'>
            <div className='modal-check-list-header'>
                <div className='modal-check-list-title'>
                    <CheckSquareOutlined style={ { marginRight: '13px', fontSize: '20px' } } />
                    <div contentEditable="true" >Чек-лист</div>
                </div>
                <div>
                    <Button style={ { backgroundColor: '#EBECEF', color: '#212529', border: 'none' } }>Удалить</Button>{' '}
                </div>
            </div>
            <div className='modal-check-list-progress'>
                <span>100%</span>
                <div className='modal-check-list-progress-bar'>

                </div>
            </div>
            <div className='modal-check-list-main'>
                {itemsArray.map((item) => {
                    return  (
                        <CheckItem
                            title={ item.title }
                        />
                    )
                })
                }
                {itemState === 'add' &&
                    <Button onClick={ handleAddBtnOnClick } style={ { marginLeft: '28px', backgroundColor: '#EBECEF', color: '#212529', border: 'none' } }>Добавить эллемент</Button>
                }
                { itemState === 'edit' &&
                    <EditListItem
                        setNewItemData={ setNewItemData }
                        setItemState={ setItemState }
                    />
                }
            </div>
        </div>
    )
}
