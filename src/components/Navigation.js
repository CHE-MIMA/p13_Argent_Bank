import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/argentBankLogo.png";
import { authSelector } from '../utiles/selectors';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getUser } from '../auth/authActions';
import { useSelector } from 'react-redux';
import { setLogout } from '../auth/authActions';



const Navigation = () => {

    const dataUser = useSelector(authSelector);

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    return (
        <div>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                {!dataUser.token ? (
                    <div>
                        <NavLink className="main-nav-item" to="/connexion">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </div>

                ) : (
                    <div>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {dataUser.user.firstName}

                        </NavLink>
                        <NavLink className="main-nav-item" to="/" onClick={() => dispatch(setLogout(dataUser.token))} >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </div>

                )
                }
            </nav>
        </div>
    );
};

export default Navigation;