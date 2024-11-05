import SimpleNavbar from './components/Navbar';
import Cards from './components/Cards';
import Banner from './components/Banner';
import './App.css';
import Instructions from './components/Instructions';
import React, { useRef } from 'react';
import ScrollButton from './components/ScrollButton';
import Table from './components/Table';
import Footer from './components/Footer';
function App() {
  const instructionsRef = useRef(null);

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <SimpleNavbar/>
      <Banner scrollToInstructions={scrollToInstructions}/>
      <Cards/>
      <ScrollButton/>
      <Instructions ref={instructionsRef}/>
      <Table/>
      <Footer/>
      
    </div>
  );
}

export default App;
