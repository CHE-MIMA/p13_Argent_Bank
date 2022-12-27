import { GET_USER } from "./authActions";
import { LOGIN } from "./authActions";
import { LOGOUT } from "./authActions";
import { UPDATE_USER } from "./authActions";

const initialState = {
    user: {},
    token: '',
    isloading: false,
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        // Login user
        case LOGIN:
            return {
                token: action.payload.token,
                user: {},
                isloading: true,
            }
        // Logout user
        case LOGOUT:
            return {
                token: "",
                user: {},

            }
        // get user profile
        case GET_USER:
            return {
                token: action.payload.token,
                user: action.payload.user,
            }
        // update user profile
        case UPDATE_USER:
            return {
                token: action.payload.token,
                user: action.payload.user,
            }
        default:
            return state;
    }
}