import React from 'react';
import "../style/main.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import FormSignIn from '../components/FormSignIn';


const Connexion = () => {
  return (
    <div>
    <Navigation/>
    <main className="main bg-dark">
     <FormSignIn/>
    </main>
    <Footer />
    </div>
  );
};

export default Connexion;
