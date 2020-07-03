import { TODO_CARD_ITEM_ADD, TODO_CARD_ITEM_SORT } from '../action-type'

export const setTodoCardItem = (items, id) => {
    return {
        type: TODO_CARD_ITEM_ADD,
        payload: {
            items,
            id
        }
    }
}

export const sortTodoCardItems = (items) => {
    return {
        type: TODO_CARD_ITEM_SORT,
        payload: {
            items
        }
    }
}
