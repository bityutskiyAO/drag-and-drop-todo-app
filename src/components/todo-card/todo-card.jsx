import React, { useState } from 'react'
import './style.css'
import { AddTodo } from './add-todo'
import {EditTodo} from "./edit-todo";

export const ToDoCard = (props) => {

    const { setNewCardsData } = props

    const [cardState, setCardState] = useState('add')

    const renderCard = () => {
       switch(cardState) {
           case 'add': {
               return  <AddTodo setCardState={ setCardState } />
           }
           case 'edit': {
               return  <EditTodo setNewCardsData={ setNewCardsData } setCardState={ setCardState } />
           }
           default: {
               return void 0
           }
       }
    }

    return (
        <div className='todo-card-container'>
            {renderCard()}
        </div>
    )
}
