import React from 'react';
import './App.css';
import Card from './/Components/Card/Card.js';
import NavBar from './/Components/NavBar/NavBar.js';
import Home from './/Components/Home/Home.js';
import Contact from './/Components/Contact/Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Card' element={<Card />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
