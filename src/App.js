import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="body-container">
        <Body />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
