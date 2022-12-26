import { GET_USER } from "./authActions";
import { LOGIN } from "./authActions";
import { LOGOUT } from "./authActions";
const initialState = {
    user: {},
    token: '',
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        // Login user
        case LOGIN:
            return {
                token: action.payload.token,
            }
        // Logout user
        case LOGOUT:
            return {
                user: {},
                token: null,
            }
        // Set user profile
        case GET_USER:
            return {
                token: action.payload.token,
                user: action.payload.user,
            }
        default:
            return state;
    }
}