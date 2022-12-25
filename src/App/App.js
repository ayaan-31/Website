import Navbar from '../Navbar/Navbar.js';
import Resume from '../Resume/Resume.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Resume />}></Route>
          <Route exact path='/resume' element={<Resume />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
