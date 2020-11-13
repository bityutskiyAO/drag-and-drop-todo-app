import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions, selectors } from '../../__data__'
import { MainCard, NewTodoModal } from '../../components'

import './style.css'

export const MainPage = (props) => {
    const { mainCards = [], setMainCard, deleteMainCard } = props
    const [isShowModal, setShowModal] = useState(false)

    const handleNewTodoClick = () => {
        setShowModal(true)
    }

    return (
        <div className='main-container'>
            <div className='main-cards'>
                {mainCards && mainCards.map((card, index) => {
                    return (
                        <MainCard
                            theme="done"
                            key={ `${card.id} ${index}` }
                            id={ card.id }
                            backgroundStyle={ card.backgroundStyle }
                            title={ card.id }
                            deleteMainCard={deleteMainCard}
                        />
                    )
                })}
                <MainCard theme='new' onClick={ handleNewTodoClick } />
            </div>
            {isShowModal &&
                <NewTodoModal setShowModal={ setShowModal } setMainCard={ setMainCard } />
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    mainCards: selectors.getMainCards(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setMainCard: actions.setMainCard,
    deleteMainCard: actions.deleteMainCard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
