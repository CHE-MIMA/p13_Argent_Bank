import axios from 'axios';
import React, { useState } from 'react';



const FormSignIn = () => {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const connectLogin = (e) => {
        e.preventDefault();
        // const emailError= document.querySelector('.username.error');
        // const passwordError= document.querySelector('.password.error');
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
                console.log(res);
                window.location = '/user';
            })
            .catch((err) => {
                console.log(err)
            })


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
                            onChange={(e) => setUsername(e.target.value)}
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