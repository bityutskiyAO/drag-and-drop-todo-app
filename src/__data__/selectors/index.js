import { get } from 'lodash'

export const getTodoCards = (state) => get(state, 'todoCards.cards', {})
export const getTodoCardItems = (state) => get(state, 'todoCards.cardItems', {})
export const getCurrentCardsItems = (state, id) => get(state, `todoCards.cardItems[${id}].items`, [])
