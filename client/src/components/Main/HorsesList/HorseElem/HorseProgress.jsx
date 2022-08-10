import React, { useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import classes from './HorseProgress.module.scss';
import horseIcon from '../../../../images/horse-icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addWinner } from '../../../../redux/reducers/horsesSlice';

function HorseProgress({ horse }) {
    const winner = useSelector(state => state.horses.winner)
    const dispatch = useDispatch()
    const finish = 1000

    useEffect(() => {
        if(!winner && horse.distance === finish) {
            dispatch(addWinner(horse.name))
        }
    },[horse])

    return (
        <div className={classes.horseWrapper}>
            <div className={classes.horseWrapper_head}>
                <img src={horseIcon}/>
                <h3 className='name'>
                    {horse.name}
                </h3>
                <span>Distance: {horse.distance} {horse.distance === finish && 'finished'}</span>
            </div>
            <div className='horseWrapper_body'>
                {/* We divide by 10, because the component takes values from 0 to 100 */}
                <LinearProgress
                    variant='determinate'
                    value={horse.distance / 10}
                    color={horse.distance === finish ? 'success' : 'primary'}
                />
            </div>
        </div>
    )
}

export default HorseProgress