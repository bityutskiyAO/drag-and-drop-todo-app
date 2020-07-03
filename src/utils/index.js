import _ from 'lodash'

export const parsQueryString = (str) => {
    let result = _.split(_.replace(str, '?', '').trim(), '&')
    result = _.reduce(result, (acc, item) => {
        return [
            ...acc,
            _.split(item, '=')[1]
        ]
    }, [])
    return result
}

export const setBackgroundToElement = (id, theme, value) => {
    const element = document.getElementById(id)
    if (theme === 'color' && value) {
        element.style.backgroundImage = null
        element.style.backgroundColor = `#${value}`
    } else if( theme === 'image' ) {
        element.style.backgroundImage = `url("${value}")`
        element.style.backgroundRepeat = 'no-repeat'
        element.style.backgroundSize = 'cover'
    }
}

export const getCardHeight = (id) => {
    const card = document.getElementById(id)
    return {
        height: card.clientHeight,
        width: card.clientWidth
    }
}
