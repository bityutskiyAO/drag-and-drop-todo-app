import { TODO_CARD_ADD, TODO_CARD_ITEM_ADD, TODO_CARD_ITEM_SORT, TODO_CARD_SORT } from '../action-type'

const initialState = {
    cards: [],
    cardItems: []
}
/*
*   cardItems: [
*       {
*           id: 1,
*              items: [
*                   ....
*               ]
*       },
*       {
*           id: 2,
*              items: [
*                   ....
*               ]
*       }
* ]
*
*
*
*
*
* */
export const todoCards = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CARD_ADD: {
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: state.cards.length,
                        ...action.payload
                    }
                ]
            }
        }
        case TODO_CARD_SORT: {
            return {
                ...state,
                cards: [
                    ...action.payload.cards
                ]
            }
        }
        case TODO_CARD_ITEM_ADD: {
            const { id, items } = action.payload

            console.log('REDUC', items)

            const { cardItems } = state
            let editItem = cardItems.find(item => item.id === id)
            if (editItem) {
                const itemIndex = cardItems.indexOf(editItem)
                cardItems[itemIndex].items.splice(0, cardItems[itemIndex].items.length, ...items)
            } else {
                editItem = {
                    id,
                    items
                }
                cardItems.push(editItem)
            }
            return {
                ...state,
                cardItems: [
                    ...cardItems
                ]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
