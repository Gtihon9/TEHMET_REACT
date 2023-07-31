import React from 'react';
import '../components/reset.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import Company from "../components/Company";

function CompanyPage() {
  return (
    <div>
        <Header/>

        <Company/>

        <Footer/>
    </div>
  );
}

export default CompanyPage;
