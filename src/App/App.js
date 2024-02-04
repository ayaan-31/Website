import Navbar from '../Components/Navbar/Navbar.js';
import Home from '../Pages/Home/Home.js';
import Resume from '../Pages/Resume/Resume.js';
import Writings from '../Pages/Writings/Writings.js';
import GettingHired from '../Pages/GettingHired/GettingHired.js';
import BooksRead2021 from '../Pages/BooksRead/BooksRead2021.js';
import BooksRead2022 from '../Pages/BooksRead/BooksRead2022.js';
import BooksRead2023 from '../Pages/BooksRead/BooksRead2023.js';
import MyZShellSetup from '../Pages/MyZShellSetup/MyZShellSetup.js';
import ReleaseNotes from '../Pages/ReleaseNotes/ReleaseNotes.js';
import DouglasPeucker from '../Pages/DouglasPeucker/DouglasPeucker.js';
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
        <Route exact path='/writings/books-read-2021' element={<BooksRead2021 />}></Route >
        <Route exact path='/writings/books-read-2022' element={<BooksRead2022 />}></Route >
        <Route exact path='/writings/books-read-2023' element={<BooksRead2023 />}></Route >
        <Route exact path='/writings/my-zshell-setup' element={<MyZShellSetup />}></Route >
        <Route exact path='/writings/douglas-peucker' element={<DouglasPeucker />}></Route >
        <Route exact path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
