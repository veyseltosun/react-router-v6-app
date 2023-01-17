import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Card from "./components/Card";



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/:user" element={<Card/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
