import {TODO_MAIN_ADD, TODO_MAIN_DELETE} from '../action-type'


export const setMainCard = (data) => {
    return {
        type: TODO_MAIN_ADD,
        payload: {
            ...data
        }
    }
}

export const deleteMainCard = (id) => {
    return {
        type: TODO_MAIN_DELETE,
        payload: {
            id
        }
    }
}
