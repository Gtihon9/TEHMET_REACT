import React from 'react';
import '../components/reset.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import Projects from "../components/Projects";

function CompanyPage() {
  return (
    <div>
        <Header/>

        <Projects/>

        <Footer/>
    </div>
  );
}

export default CompanyPage;
