import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    horses: [
        {
            name: 'Princess Diana',
            distance: 0
        },
        {
            name: 'Cricket',
            distance: 0
        },
        {
            name: 'Rebel',
            distance: 0
        },
        {
            name: 'Lucy',
            distance: 0
        },
        {
            name: 'Lacey',
            distance: 0
        },
        {
            name: 'Ginger',
            distance: 0
        }
    ],
    betOn: null,
    winner: null,
    roundIsStart: false
}

const horsesSlice = createSlice({
    name: 'horses',
    initialState,
    reducers: {
        clearState: () => initialState,
        startRound: (state) => {
            state.roundIsStart = true
        },
        changeDistance: (state, action) => {
            const prevValue = JSON.stringify(state.horses)
            const currentValue = JSON.stringify(action.payload)

            if (prevValue === currentValue) return;
            state.horses = action.payload
        },
        addWinner: (state, action) => {
            state.winner = action.payload
        },
        addBet: (state, action) => {
            state.betOn = action.payload
        }
    }
})

export const { changeDistance, addWinner, clearState, addBet, startRound } = horsesSlice.actions

export default horsesSlice.reducer