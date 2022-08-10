import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDistance } from '../../redux/reducers/horsesSlice';
import socket from '../../socket';
import BettingField from './BettingField/BettingField';
import ButtonsConteiner from './ButtonsConteiner/ButtonsConteiner';
import HorsesList from './HorsesList/HorsesList';
import ResultPanel from './ResultPanel/ResultPanel';
import './main.scss';

function Main() {
    const winner = useSelector(state => state.horses.winner)
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('ticker', (data) => {
            dispatch(changeDistance(data))
        })
    }, [socket])

    return (
        <main className='main'>
            {winner && <ResultPanel/>}
            <BettingField/>
            <HorsesList/>
            <ButtonsConteiner/>
        </main>
    );
}

export default Main