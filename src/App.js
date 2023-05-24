import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import NavBar from './components/NavBar';
import {useState} from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const[didContact, setDidContact] = useState('not contacted');
    function addContact(){
      setDidContact('contacted succesfully');
    };
    
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact*" element={<Contact onAdd={addContact} didContact={didContact} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
