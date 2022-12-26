import axios from "axios";
import AuthorisationToken from "../utiles/autorisation";
export const GET_USER = "GET_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";



export function setLogin(identifiants) {
    return async (dispatch) => {

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, identifiants)
            const token = response.data.body.token;
            localStorage.setItem("token", response.data.body.token);
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
            console.log(user);
        } catch (error) {
            console.log(error)
        }
    }
}

