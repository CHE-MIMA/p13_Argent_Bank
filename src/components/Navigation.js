import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/argentBankLogo.png";

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectUser } from '../utiles/selectors';
// import { selectFirstName } from '../utiles/selectors';
// import { useSelector } from 'react-redux';
// import { logOut } from '../features/auth';


const Navigation = () => {
    // const firstName = useSelector(selectFirstName);
    // console.log(firstName);
    // const user = useSelector(selectUser);
    // console.log(user);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const Logout = async (e) => {
    //     e.preventDefault();
    //     dispatch((logOut));
    //     console.log("Logout success!");
    //     navigate("/");
    // };

    const token = localStorage.getItem("token");
    console.log(token)


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
                {token ? (
                    <div>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>

                        </NavLink>
                        <NavLink className="main-nav-item" to="/" >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </div>




                ) : (
                    <div>
                        <NavLink className="main-nav-item" to="/connexion">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </div>


                )}
            </nav>
        </div>
    );
};

export default Navigation;