import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Main from './pages/main/Main';
import Tools from './pages/tools/Tools';
import Login from './pages/login/Login';

function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/herramientas' element={<Tools />}/>
              <Route path='/login' element={<Login />}/> 
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
