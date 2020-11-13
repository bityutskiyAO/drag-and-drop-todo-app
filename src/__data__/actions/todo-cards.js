import { TODO_CARD_ADD, TODO_CARD_SORT } from '../action-type'

export const setTodoCard = (cardData, id) => {

    console.log('cardData',cardData)
    console.log('id',id)


    return {
        type: TODO_CARD_ADD,
        payload: {
            id,
            cardData
        }
    }
}

export const sortCards = (cards, id) => {
    return {
        type: TODO_CARD_SORT,
        payload: {
            id,
            cards
        }
    }
}
