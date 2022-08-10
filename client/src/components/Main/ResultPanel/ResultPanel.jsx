import { Alert } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function ResultPanel() {
    const {winner, betOn} = useSelector(state => state.horses)
    const win = winner && winner === betOn
    const lost = winner && winner !== betOn

    return (
        <div className='resultPanel'>
            {winner && <h4>Winner is {winner}</h4>}
            {win && <Alert icon={false} variant='outlined' severity='success'>Congratulations your horse won</Alert>}
            {lost && <Alert icon={false} variant='outlined' severity='error'>Unfortunately, your horse lost</Alert>}
        </div>
    )
}

export default ResultPanel