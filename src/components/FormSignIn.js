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

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("")
    const { token } = useSelector(authSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) navigate('/user')// Redirect on authentication
    }, [token, navigate])


    const connectLogin = (e) => {
        e.preventDefault();
        // axios({
        //     method: "post",
        //     url: `${process.env.REACT_APP_API_URL}/login`,
        //     widthCredentials: true,
        //     data: {
        //         email,
        //         password,
        //     },
        // })
        //     .then((res) => {
        //         console.log(res.data.body.token);

        //         localStorage.setItem("token", res.data.body.token);
        // navigate("/user");
        // setEmail("");
        // setPassword("");
        dispatch(
            setLogin(identifiants)
            // logIn({
            //     email: email,
            //     succesToken: res.data.body.token,
            // })
        );
        // })
        // .catch((err) => {
        //     console.log(err)
        // })


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
                    {/* <div className="username error"></div> */}
                    <br />
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            onChange={(e) => setIdentifiants({ ...identifiants, password: e.target.value })}
                            value={identifiants.password} />
                    </div>
                    {/* <div className="password error"></div> */}
                    <br />
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <input type="submit" value="Sign In" className="sign-in-button" />
                    {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
                </form>
            </section>
        </div>
    );
};

export default FormSignIn;