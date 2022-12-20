import React, { useEffect } from 'react';
import "../style/main.css";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const User = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null ) {
      navigate("/Connexion");
    }
  }, []);
  // const { setAuth } = useContext(AuthContext);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLLastName] = useState("")
  // const dispatch = useDispatch();
  // const navigate = useNavigate()

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
      //         navigate("/user");
      //         setAuth({ email, password });
      //         setEmail("");
      //         setPassword("");
      //         dispatch(
      //             logIn({
      //                 email: email,
      //                 succesToken: res.data.body.token,
      //             })
      //         );
      //     })
      //     .catch((err) => {
      //         console.log(err)
      //     })


 

    return (
        <div>
          <Navigation/>
       {/* <nav className="main-nav">
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
          Tony
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav> */}
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
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