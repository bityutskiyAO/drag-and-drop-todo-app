import { TODO_CARD_ITEM_ADD } from '../action-type'

export const setTodoCardItem = (items, id, boardId) => {
    return {
        type: TODO_CARD_ITEM_ADD,
        payload: {
            boardId,
            items,
            id
        }
    }
}
