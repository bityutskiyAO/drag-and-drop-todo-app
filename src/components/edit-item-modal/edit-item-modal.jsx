import React from 'react'
import { CloseOutlined, CreditCardOutlined, PushpinOutlined, FieldTimeOutlined, CheckSquareOutlined, PictureOutlined } from '@ant-design/icons'

import './style.css'
import { EditItemData } from './modal-components/edit-item-data/edit-item-data'
import { ItemModalDescription } from './modal-components/item-modal-description/item-modal-description'
import { ItemModalCheckList } from './modal-components/item-modal-check-list/item-modal-check-list'

const stubEditData = [
    {
        Icon: <PushpinOutlined />,
        title: 'Метки'
    },
    {
        Icon: <FieldTimeOutlined />,
        title: 'Срок'
    },
    {
        Icon: <CheckSquareOutlined />,
        title: 'Чек-лист'
    }
]


export const EditItemModal = (props) => {
    const { itemTitle } = props

    return (
        <div className='item-modal'>
            <div className='item-modal-container'>
                <div className='item-modal-header'>
                    <div className='item-modal-header-left'>
                        <CreditCardOutlined className='item-modal-header-icon' />
                        <div className='item-modal-header-left-title' contentEditable="true">TESt</div>
                    </div>
                    <CloseOutlined className='item-modal-header-icon'  />
                </div>
                <div className='item-modal-main'>
                    <div className='item-modal-body'>
                        <div className='item-modal-body-labels'>

                        </div>
                        <div className='item-modal-body-description'>
                            <ItemModalDescription />
                        </div>
                        <div className='item-modal-body-check-list'>
                            <ItemModalCheckList />
                        </div>
                    </div>
                    <div className='item-modal-sidebar'>
                        <p className='item-modal-sidebar-title'>Добавить на карточку</p>
                        {stubEditData.map(data => {
                            return (
                                <EditItemData
                                    title={ data.title }
                                >
                                    {data.Icon}
                                </EditItemData>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
