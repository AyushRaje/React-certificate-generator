import SimpleNavbar from './components/Navbar';
import Cards from './components/Cards';
import Banner from './components/Banner';
import './App.css';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="App">
      <SimpleNavbar/>
      <Banner/>
      <Cards/>
      <Instructions/>
    </div>
  );
}

export default App;
