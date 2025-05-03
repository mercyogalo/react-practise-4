import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import React from 'react';
import Home from './Home';
import Contact from './Contact'

function App() {
  return (
    <div className="App">

<Router>

<Navbar />


  <Routes>

  <Route path='/' element={<Home />} />
  <Route path='/contact' element={<Contact />} />
    

  </Routes>
</Router>

    

    </div>
  );
}

export default App;
