import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react';
import Home from './Home';
import Contact from './Contact'

function App() {
  return (
    <div className="App">

<Router>
  <Routes>

    <Route path='/' element={<Contact />} />
    <Route path='/home' element={<Home />} />

  </Routes>
</Router>

    

    </div>
  );
}

export default App;
