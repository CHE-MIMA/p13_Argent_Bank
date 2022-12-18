import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    // le nom du slice
    name: 'auth',
    // le state initial
    initialState: 'false',
    // reducers permet de définir les actions et le reducer
    reducers: {
        // l'action toggle ('theme/toggle')
        singnIn: (state) => {
            return state === 'false' ? 'true' : 'false'
        },
        // l'action set ('theme/set')
        singnUp: (state, action) => {
            return action.payload
        },
    },
})

// on extrait les actions et le reducer
const { actions, reducer } = authSlice
// on export chaque action individuellement
export const { singnIn, singnUp } = actions
// on export le reducer comme default export
export default reducer
