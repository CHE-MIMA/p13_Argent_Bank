import axios from "axios";
import AuthorisationToken from "../utiles/autorisation";
export const GET_USER = "GET_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_USER = "UPDATE_USER";



export function setLogin(identifiants) {
    return async (dispatch) => {

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, identifiants)
            const token = response.data.body.token;
            localStorage.setItem("token", token);
            dispatch({ type: LOGIN, payload: { token } })
            console.log(token);
        } catch (error) {
            console.log(error)
        }
    }
}




export function getUser(token) {

    return async dispatch => {

        try {
            AuthorisationToken(token)
            // dispatch({ type: LOGIN, payload: { token } })
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/profile`)
            const user = response.data.body;
            dispatch({ type: GET_USER, payload: { token, user } })
            // console.log(user);
        } catch (error) {
            console.log(error)
        }
    }
}

export function setLogout() {
    return (dispatch) => {
        try {
            localStorage.removeItem("token");
            // console.log(token);
            dispatch({ type: LOGOUT })
        } catch (error) {
            console.log(error)
        }
    }
}
export function updateUser(dataInput) {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, dataInput)
            const user = response.data.body

            dispatch({ type: UPDATE_USER, payload: { user } })
            console.log(user);
        } catch (error) {
            console.log(error)
        }
    }
}
