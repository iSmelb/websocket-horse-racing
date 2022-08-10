import React from 'react'
import { useSelector } from 'react-redux'
import HorseProgress from './HorseElem/HorseProgress'

function HorsesList() {
    const horses = useSelector(state => state.horses.horses)
    
    return (
        <div className='horsesList conteiner'>
            {horses.map(horse => <HorseProgress key={horse.name + horse.distance} horse={horse} />)}
        </div>
    )
}

export default HorsesList