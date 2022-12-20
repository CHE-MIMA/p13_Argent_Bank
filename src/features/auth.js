import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: null,
    token: null,
    firstName: null,
    lastName: null,
};

const authSlice = createSlice({
    // le nom du slice
    name: "auth",
    // le state initial
    initialState,
    // reducers permet de définir les actions et le reducer
    reducers: {
        logIn: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.succesToken;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        // l'action set 
        logOut: (state) => {
            state.email = null;
            state.token = null;
            state.firstName = null;
            state.lastName = null;
        },

    },
});
// on export chaque action individuellement
export const { logIn, logOut } = authSlice.actions;
// on export le reducer comme default export
export default authSlice.reducer;
