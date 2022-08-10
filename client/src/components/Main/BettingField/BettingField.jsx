import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBet } from '../../../redux/reducers/horsesSlice'
import MyButton from '../../UI/MyButton/MyButton'

function BettingField() {
    const { horses, betOn } = useSelector(state => state.horses)
    const dispatch = useDispatch()

    const setBet = useCallback((e) => {
        if (!betOn) {
            dispatch(addBet(e.target.innerText))
        }
    },[betOn])

    return (
        <div className='bettingField'>
            <h1>Choose the horse:</h1>
            {horses.map(horse =>
                <MyButton
                    onClick={setBet}
                    disabled={betOn ? true : false}
                    key={horse.name}
                    className={betOn && betOn === horse.name ? 'active' : ''}
                >
                    {horse.name}
                </MyButton>)
            }
        </div>
    )
}

export default BettingField