import React from 'react';
import "../style/main.css";
import Navigation from "../components/Navigation";
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer"


const Connexion = () => {
  return (
    <div>
        <Navigation/>
           {/* <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav> */}
      <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
           </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <NavLink to="/user" class="sign-in-button">Sign In</NavLink>
          {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  --> */}
        </form>
      </section>
    </main>
    <Footer />
    </div>
  );
};

export default Connexion;