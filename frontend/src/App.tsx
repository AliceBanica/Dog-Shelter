import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AllDogs from './components/AllDogs';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Surrender from './components/Surrender';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allDogs" element={<AllDogs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/surrender" element={<Surrender />} />
      </Routes>
    </HashRouter>
  )
}


export default App
