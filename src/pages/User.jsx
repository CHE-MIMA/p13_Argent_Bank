import React, { useEffect, useState } from 'react';
import "../style/main.css";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Navigation from "../components/Navigation";
import { authSelector } from '../utiles/selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser, updateUser } from '../auth/authActions'; 


const User = () => {
  const [dataInput, setdataInput] = useState({
    firstName: '',
    lastName: '',
})
  const [ isOpen, setIsOpen]= useState(false)
 
  const dataUser = useSelector(authSelector);
  // console.log(dataUser);
  const dispatch = useDispatch();


  const navigate = useNavigate();
    useEffect(() => {
      if (dataUser.token){
      dispatch(
        getUser(dataUser.token)
        )
}else{
  navigate('/')// Redirect on home
}
  }, [dataUser.token])

  const updateForm = (e) => {
    e.preventDefault();
    dispatch(
        updateUser(dataInput, dataUser.token)
       

    );
    setIsOpen(false);
};
    return (
        <div>
       <Navigation/>   
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /> {dataUser.user.firstName}  {dataUser.user.lastName}!</h1>
        {isOpen ?  <form action="" onSubmit={updateForm} id="update-form">
          <input className='fistname-input' type="firstname" name="firstname"
                            onChange={(e) => setdataInput({ ...dataInput, firstName: e.target.value })}
                            value={dataInput.firstName}  /> 
          <input className='lastname-input'type="lastname" name="lastname"
                            onChange={(e) => setdataInput({ ...dataInput, lastName: e.target.value })}
                            value={dataInput.lastName}  /> <br />
          <button type="submit" className='save-button'> Save </button>
          <button className='cancel-button'onClick={() => setIsOpen(false)}>Cancel</button>

          </form> : 
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