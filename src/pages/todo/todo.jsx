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

export const ToDo = (props) => {
    const { todoCards, setTodoCard, sortTodoCard } = props
    const { params: { id } } = props.match

    const [, drop] = useDrop({
        accept: dropItemsTypes.CARD
    })

    const [theme, value]  = parsQueryString(props.location.search)

    const moveCard = (id, atIndex) => {
        const { card, index } = findCard(id)
        sortTodoCard(
            update(todoCards, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, card]
                ]
            })
        )
    }

    const findCard = (id) => {
        const card = todoCards.find((card) => card.id === id)
        return {
            card,
            index: todoCards.indexOf(card)
        }
    }

    useEffect(() => {
        setBackgroundToElement('todo-container', theme, value )
    }, [])

    const setNewCardsData = (title) => {
        setTodoCard({ title: title })
    }

    console.log('todoCards', todoCards)

    return (
        <div className='todo-container' id='todo-container'>
            <ToDoHeader title={ id }  />
            <div className='todo-body' ref={ drop }>
                {todoCards && todoCards.map((card) => {
                    return (
                        <DoneTodo
                            key={ card.title }
                            id={ card.id }
                            cardTitle={ card.title }
                            moveCard={ moveCard }
                            findCard={ findCard }
                        />
                    )
                })}
                <ToDoCard setNewCardsData={ setNewCardsData } />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todoCards: selectors.getTodoCards(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setTodoCard: actions.setTodoCard,
    sortTodoCard: actions.sortCards
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
