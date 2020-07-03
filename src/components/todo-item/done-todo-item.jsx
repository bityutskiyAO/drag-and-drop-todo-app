import React from 'react'
import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined'

import './style.css'
import { useDrag, useDrop } from 'react-dnd'
import { dropItemsTypes } from '../../constants'
import { getCardHeight } from '../../utils'

export const DoneTodoItem = (props) => {
    const { title, findItem, moveItem, id, cardId } = props

    const originalIndex = findItem(id).index

    const [{ isDragging }, drag] = useDrag({
        item: { type: dropItemsTypes.CARD_ITEM, id, originalIndex, cardId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } =  monitor.getItem()
            const didDrop = monitor.didDrop()
            if (!didDrop) {
                moveItem(droppedId, originalIndex)
            }
        }
    })

    const [{ isOver }, drop] = useDrop({
        accept: dropItemsTypes.CARD_ITEM,
        canDrop: () => false,
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
        hover(item) {
            const { id: draggedId, cardId: draggedCardId } = item
            if (draggedId !== id && draggedCardId === cardId) {
                const { index: overIndex } = findItem(id)
                moveItem(draggedId, overIndex)
            }
        },
    })

    const opacity = isDragging ? 0 : 1


    console.log(`opacity ${id}`, opacity)
    console.log(`isDragging ${id}`, isDragging)
    return (
       <div style={ { position: 'relative' } } ref={ (node) => drop(node) } >
            <div id={ `done-todo-item-${id}` } className='done-todo-item' style={ { opacity } } ref={ drag }>
                <span>{title}</span>
                <EditOutlined />
            </div>
       {isOver &&
           <div className='done-todo-placeholder' style={ { height: getCardHeight(`done-todo-item-${id}`).height, width: getCardHeight(`done-todo-item-${id}`).width } }>

           </div>
       }
       </div>
    )
}
