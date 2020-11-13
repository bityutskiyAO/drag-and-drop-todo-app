import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

import { actions, selectors } from '../../__data__'
import { ToDoHeader } from '../../components'
import { ToDoCard } from '../../components/todo-card/todo-card'
import  DoneTodo from '../../components/todo-card/done-todo'

import './style.css'
import { parsQueryString, setBackgroundToElement } from '../../utils'
import { dropItemsTypes } from '../../constants'
import { EditItemModal } from '../../components/edit-item-modal/edit-item-modal'

export const ToDo = (props) => {
    const { todoCards, setTodoCard, sortTodoCard } = props
    const { params: { id : boardId } } = props.match

    const currentTodoCards = todoCards(boardId)

    const [, drop] = useDrop({
        accept: dropItemsTypes.CARD
    })

    const [theme, value]  = parsQueryString(props.location.search)

    const moveCard = (id, atIndex) => {
        const { card, index } = findCard(id)
        sortTodoCard(
            update(currentTodoCards, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, card]
                ]
            }), boardId)
    }

    const findCard = (id) => {
        const card = currentTodoCards.find((card) => card.id === id)
        return {
            card,
            index: currentTodoCards.indexOf(card)
        }
    }

    useEffect(() => {
        setBackgroundToElement('todo-container', theme, value )
    }, [])

    const setNewCardsData = (title) => {
        setTodoCard({ title: title }, boardId)
    }

    return (
        <div className='todo-container' id='todo-container'>
            <ToDoHeader title={ boardId }  />
            <div className='todo-body' ref={ drop }>
                {currentTodoCards && currentTodoCards.map((card) => {
                    return (
                        <DoneTodo
                            key={ card.title }
                            id={ card.id }
                            cardTitle={ card.title }
                            moveCard={ moveCard }
                            findCard={ findCard }
                            boardId={ boardId }
                        />
                    )
                })}
                <ToDoCard setNewCardsData={ setNewCardsData } />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todoCards: (urlIdParam) => selectors.getTodoCards(state, urlIdParam)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTodoCard: actions.setTodoCard,
    sortTodoCard: actions.sortCards
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
