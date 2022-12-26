import Navbar from '../Components/Navbar/Navbar.js';
import Home from '../Pages/Home/Home.js';
import Resume from '../Pages/Resume/Resume.js';
import ReleaseNotes from '../Pages/ReleaseNotes/ReleaseNotes.js';
import NotFound from '../Pages/NotFound/NotFound.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
        <Route exact path='/release-notes' element={<ReleaseNotes />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
