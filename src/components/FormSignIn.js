// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { logIn } from "../features/auth";
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../auth/authActions';
import { authSelector } from '../utiles/selectors';



const FormSignIn = () => {
    const [identifiants, setIdentifiants] = useState({
        email: '',
        password: '',

    })
    const { token } = useSelector(authSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) navigate('/user')// Redirect on authentication
    }, [token, navigate])

    const connectLogin = (e) => {
        e.preventDefault();
        dispatch(
            setLogin(identifiants)

        );
    };

    return (
        <div>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form action="" onSubmit={connectLogin} id="sign-up-form">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"
                            onChange={(e) => setIdentifiants({ ...identifiants, email: e.target.value })}
                            value={identifiants.email} />
                    </div>

                    <br />
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            onChange={(e) => setIdentifiants({ ...identifiants, password: e.target.value })}
                            value={identifiants.password} />
                    </div>

                    <br />
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <input type="submit" value="Sign In" className="sign-in-button" />

                </form>
            </section>
        </div>
    );
};

export default FormSignIn;