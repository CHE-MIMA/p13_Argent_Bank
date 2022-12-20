import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useDispatch } from "react-redux";
import { logIn } from "../features/auth";
import AuthContext from "../authContext";
import { useNavigate } from 'react-router-dom';



const FormSignIn = () => {
    const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const connectLogin = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/login`,
            widthCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res.data.body.token);

                localStorage.setItem("token", res.data.body.token);
                navigate("/user");
                setAuth({ email, password });
                setEmail("");
                setPassword("");
                dispatch(
                    logIn({
                        email: email,
                        succesToken: res.data.body.token,
                    })
                );
            })
            .catch((err) => {
                console.log(err)
            })


    };
    console.log(email, password);
    return (
        <div>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form action="" onSubmit={connectLogin} id="sign-up-form">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </div>
                    {/* <div className="username error"></div> */}
                    <br />
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} />
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