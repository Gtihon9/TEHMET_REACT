import React from 'react';
import '../components/reset.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Jobs } from "../components/Jobs/Jobs";

function JobsPage() {
  return (
    <>
      <Header />

      <Jobs />

      <Footer />
    </>
  );
}

export default JobsPage;
