import React, { useEffect, useState } from 'react';
import "../style/main.css";
import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';
// import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';
import { authSelector } from '../utiles/selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from '../auth/authActions'; 

const User = () => {
  const [ isOpen, setIsOpen]= useState(false)
  // const {token} = useSelector(authSelector);
  const dataUser = useSelector(authSelector);
  console.log(dataUser);

 

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {

    if (dataUser.token ) {
    dispatch(
      getUser(dataUser.token)
    
   )
}
  // else{
  //   navigate("/")
  // }
    
  }, []);
 


 

    return (
        <div>
       <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ logo }
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
       {dataUser.user.firstName}
          
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /> {dataUser.user.firstName}  {dataUser.user.lastName}!</h1>
        {isOpen ? <input /> : 
         <button  className="edit-button" onClick={() => setIsOpen(true)}>Edit Name</button>
       }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <Footer />
        </div>
    );
};

export default User;