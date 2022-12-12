import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <nav class="main-nav">
                <NavLink class="main-nav-logo" to="/">
                    <img
                        class="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink class="main-nav-item" to="/connexion">
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;