import React from 'react';
import '../components/reset.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import { Rent } from "../components/Rent/Rent";

function CompanyPage() {
  return (
    <div>
      <Header />

      <Rent />

      <Footer />
    </div>
  );
}

export default CompanyPage;
