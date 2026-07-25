import Navbar from '../Components/Navbar/Navbar.js';
import Resume from '../Pages/Resume/Resume.js';
import Portfolio from '../Pages/Portfolio/Portfolio.js';
import NotFound from '../Pages/NotFound/NotFound.js';
import Footer from '../Components/Footer/Footer.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Portfolio />}></Route>
        <Route exact path='/portfolio' element={<Portfolio />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
        <Route exact path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
