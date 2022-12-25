import Navbar from '../Navbar/Navbar.js';
import Resume from '../Resume/Resume.js';
import NotFound from '../NotFound/NotFound.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Resume />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
