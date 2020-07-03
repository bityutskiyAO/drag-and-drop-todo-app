import { TODO_CARD_ADD, TODO_CARD_SORT } from '../action-type'

export const setTodoCard = (cardData) => {
    return {
        type: TODO_CARD_ADD,
        payload: {
            ...cardData
        }
    }
}

export const sortCards = (cards) => {
    return {
        type: TODO_CARD_SORT,
        payload: {
            cards
        }
    }
}
