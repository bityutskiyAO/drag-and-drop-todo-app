import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions, selectors } from '../../__data__'
import { TodoItem } from '../todo-item/todo-item'
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'

import { DoneTodoItem } from '../todo-item/done-todo-item'
import { dropItemsTypes } from '../../constants'

import './style.css'
import { getCardHeight } from '../../utils'

export const DoneTodo = (props) => {
    const { cardTitle, id, cardItems, setTodoCardItems, moveCard, findCard, boardId } = props
    const currentCardItems = _.find(cardItems(boardId), (card) => card.id === id)?.items || []

    const moveItem = (itemId, atIndex) => {
        const { item, index } = findItem(itemId)
        setTodoCardItems(update(currentCardItems, {
            $splice: [
                [index, 1],
                [atIndex, 0, item]
            ]
        }), id, boardId)
    }

    const findItem = (itemId) => {
        const item = currentCardItems.find((item) => item.id === itemId)
        return {
            item,
            index: currentCardItems.indexOf(item)
        }
    }

    const handleItemAdd = (itemData) => {
        setTodoCardItems([
            ...currentCardItems,
            {
                id: currentCardItems.length ? currentCardItems.length : 0,
                ...itemData
            }
        ], id, boardId)
    }

    const originalIndex = findCard(id).index

    const [{ isDragging }, drag] = useDrag({
        item: { type: dropItemsTypes.CARD, id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem()
            const didDrop = monitor.didDrop()
            if (!didDrop) {
                moveCard(droppedId, originalIndex)
            }
        }
    })

    const [{ isOver }, drop] = useDrop({
        accept: dropItemsTypes.CARD,
        canDrop: () => false,
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findCard(id)
                moveCard(draggedId, overIndex)
            }
        },
    })

    const [, drop2] = useDrop({ accept: dropItemsTypes.CARD_ITEM })


    const opacity = isDragging ? 0 : 1

    return (
        <div style={ { position: 'relative' } } ref={ (node) => drop(node) }>
            <div id={ `done-todo-card-${id}` } className='todo-card done-todo-container' style={ { opacity } } ref={ drag }>
                <span className='done-todo-title'>{cardTitle}</span>
                <div ref={ drop2 }>
                    {currentCardItems && currentCardItems.map((item, index) => {
                        return (
                            <DoneTodoItem
                                key={ `${item.title}-${index} ` }
                                id={ item.id }
                                cardId={ id }
                                title={ item.title }
                                moveItem={ moveItem }
                                findItem={ findItem }
                            />
                        )
                    })
                    }
                </div>
                <TodoItem state='add' handleItemAdd={ handleItemAdd } />
            </div>
            {isOver &&
            <div className='todo-card-placeholder' style={ { height: getCardHeight(`done-todo-card-${id}`).height } }>

            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cardItems: (id) => selectors.getTodoCardItems(state, id)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTodoCardItems: actions.setTodoCardItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DoneTodo)
