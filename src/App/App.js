import Navbar from '../Components/Navbar/Navbar.js';
import Home from '../Pages/Home/Home.js';
import Resume from '../Pages/Resume/Resume.js';
import Writings from '../Pages/Writings/Writings.js';
import GettingHired from '../Pages/GettingHired/GettingHired.js';
import BooksRead from '../Pages/BooksRead/BooksRead.js';
import MyZShellSetup from '../Pages/MyZShellSetup/MyZShellSetup.js';
import TimeTravelBugs from '../Pages/TimeTravelBugs/TimeTravelBugs.js';
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
        <Route exact path='/writings' element={<Writings />}></Route>
        <Route exact path='/release-notes' element={<ReleaseNotes />}></Route>
        <Route exact path='/writings/getting-hired' element={<GettingHired />}></Route >
        <Route exact path='/writings/books-read' element={<BooksRead />}></Route >
        <Route exact path='/writings/my-zshell-setup' element={<MyZShellSetup />}></Route >
        <Route exact path='/writings/time-travel-bugs' element={<TimeTravelBugs />}></Route>
        <Route exact path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
