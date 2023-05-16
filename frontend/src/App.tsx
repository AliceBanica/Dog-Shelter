import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import SurrenderDog from './components/SurrenderDog';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/surrender-dog" element={<SurrenderDog />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
