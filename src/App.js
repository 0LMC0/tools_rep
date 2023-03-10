import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
          <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
