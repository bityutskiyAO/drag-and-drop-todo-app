import { get, find } from 'lodash'

export const getTodoCards = (state, id) =>  find(state.todoCards.allData, (data) => data.boardId === id)?.cards

export const getTodoCardItems = (state, id) => find(state.todoCards.allData, (data) => data.boardId === id)?.cardItems

export const getMainCards = (state) => get(state, 'mainCards.cards')
