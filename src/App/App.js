import Navbar from '../Components/Navbar/Navbar.js';
import Home from '../Pages/Home/Home.js';
import Resume from '../Pages/Resume/Resume.js';
import Resources from '../Pages/Resources/Resources.js';
import GettingHired from '../Pages/GettingHired/GettingHired.js';
import ReleaseNotes from '../Pages/ReleaseNotes/ReleaseNotes.js';
import NotFound from '../Pages/NotFound/NotFound.js';
import Footer from '../Components/Footer/Footer.js';
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
        <Route exact path='/resources' element={<Resources />}></Route>
        <Route exact path='/release-notes' element={<ReleaseNotes />}></Route>
        <Route exact path='/resources/getting-hired' element={<GettingHired />}></Route >
        <Route exact path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
