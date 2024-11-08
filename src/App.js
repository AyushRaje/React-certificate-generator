import SimpleNavbar from './components/Navbar';
import Cards from './components/Cards';
import Banner from './components/Banner';
import './App.css';
import Instructions from './components/Instructions';
import React, { useRef } from 'react';
import ScrollButton from './components/ScrollButton';
import Table from './components/Table';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Verification from './components/Verification';
import VerificationNav from './components/VerificationNav';

function App() {
  const instructionsRef = useRef(null);

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={
        <div className="App">
        <SimpleNavbar/>
        <Banner scrollToInstructions={scrollToInstructions}/>
        <Cards/>
        <ScrollButton/>
        <Instructions ref={instructionsRef}/>
        <Table/>
        <Footer/>
        </div>
        }/>
      <Route path="/verify/:id" element={
      <div className="App">
      <VerificationNav/>
      <Verification/>
      <Footer/>
      </div>}
      />
    </Routes>
  </Router>
  );
}

export default App;
