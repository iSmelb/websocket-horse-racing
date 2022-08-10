import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, startRound, } from '../../../redux/reducers/horsesSlice'
import socket from '../../../socket'
import MyButton from '../../UI/MyButton/MyButton'

function ButtonsConteiner() {
    const betOn = useSelector(state => state.horses.betOn)
    const roundStart = useSelector(state => state.horses.roundIsStart)
    const isDisabled = !betOn || roundStart
    const dispatch = useDispatch()

    const start = useCallback(() => {
        socket.connect()
        dispatch(startRound())
        socket.emit('start')
    }, [socket])

    const tryAgain = useCallback(() => {
        socket.disconnect()
        dispatch(clearState())
    },[socket])

    return (
        <div className='buttonsConteiner'>
            <MyButton disabled={isDisabled} onClick={start}>start</MyButton>
            <MyButton onClick={tryAgain}>try again</MyButton>
        </div>
    )
}

export default ButtonsConteiner