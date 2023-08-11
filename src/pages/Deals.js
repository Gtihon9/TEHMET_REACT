import React from 'react';
import '../components/reset.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from "../components/Services";

function Home() {
  return (
    <div>
        <Header/>

        <Services/>

        <Footer/>
    </div>
  );
}

export default Home;
