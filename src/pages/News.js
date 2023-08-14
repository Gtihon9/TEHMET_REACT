import React from 'react';
import '../components/reset.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import { News } from "../components/News/News";

function CompanyPage() {
  return (
    <div>
      <Header />

      <News />

      <Footer />
    </div>
  );
}

export default CompanyPage;
