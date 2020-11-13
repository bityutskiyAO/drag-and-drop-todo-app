import { TODO_MAIN_ADD, TODO_MAIN_DELETE } from '../action-type'

const initState = {
    cards: []
}


export const mainCards = (state = initState, action) => {
    switch (action.type) {
        case TODO_MAIN_ADD: {
            return {
                cards: [
                    ...state.cards,
                    action.payload
                ]
            }
        }
        case TODO_MAIN_DELETE: {
            const { cards } = state
            cards.splice(cards.findIndex(card => card.id === action.payload.id), 1)
            return {
                cards: [
                    ...cards
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
