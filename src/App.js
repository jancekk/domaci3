import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact*" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
