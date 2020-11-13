import { TODO_CARD_ADD, TODO_CARD_ITEM_ADD, TODO_CARD_SORT } from '../action-type'

const initialState = {
    allData: []
}

export const todoCards = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CARD_ADD: {
            const { allData } = state
            const currentCards = allData.find((data) => data.boardId === action.payload.id)

            if (currentCards) {
                const currentIndex = allData.indexOf(currentCards)
                allData[currentIndex].cards.push({
                    id:  allData[currentIndex].cards.length,
                    ...action.payload.cardData
                })
            } else {
                const newData = {
                    boardId: action.payload.id,
                    cards: [
                        {
                            id: 0,
                            ...action.payload.cardData
                        }
                    ],
                    cardItems: []
                }

                allData.push(newData)
            }

            return {
                ...state,
                allData: [
                    ...allData
                ]
            }
        }
        case TODO_CARD_SORT: {
            const { allData } = state

            const currentCards = allData.find((data) => data.boardId === action.payload.id)
            const currentIndex = allData.indexOf(currentCards)
            allData[currentIndex].cards.splice(0, allData[currentIndex].cards.length, ...action.payload.cards)

            return {
                ...state,
                allData: [
                    ...allData
                ]
            }
        }
        case TODO_CARD_ITEM_ADD: {
            const { id, items, boardId } = action.payload
            const { allData } = state

            const currentData = allData.find((data) => data.boardId === boardId)
            console.log('currentData', currentData)

            const currentIndex = allData.indexOf(currentData)
            const { cardItems } = currentData
                let editItem = cardItems.find(item => item.id === id)
                if (editItem) {
                    const itemIndex = cardItems.indexOf(editItem)
                    allData[currentIndex].cardItems[itemIndex].items.splice(0, cardItems[itemIndex].items.length, ...items)
                } else {
                    editItem = {
                        id,
                        items
                    }
                    allData[currentIndex].cardItems.push(editItem)
                }
            return {
                ...state,
                allData: [
                    ...allData
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
