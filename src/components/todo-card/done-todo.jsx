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
    const { cardTitle, id, cardItems, setTodoCardItems, moveCard, findCard } = props
    const currentCardItems = _.find(cardItems, (card) => card.id === id)?.items || []

    const moveItem = (itemId, atIndex) => {
        const { item, index } = findItem(itemId)
        setTodoCardItems(update(currentCardItems, {
            $splice: [
                [index, 1],
                [atIndex, 0, item]
            ]
        }), id)
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
        ], id)
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
    console.log(`opacity ${id}`, opacity)
    console.log(`isDragging ${id}`, isDragging)
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
    cardItems: selectors.getTodoCardItems(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTodoCardItems: actions.setTodoCardItem,
    sortCardItems: actions.sortTodoCardItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DoneTodo)
