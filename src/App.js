import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Mainlayout from './components/layouts/Mainlayout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import Partners from './components/pages/Partners';
//import Try from './components/pages/try';



import Appdev from './components/services/Appdev';
import Digitalmarketing from './components/services/Digitalmarketing';
import Ecommercedev from './components/services/Ecommercedev';
import Webdev from './components/services/Webdev';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="partners" element={<Partners />} />
           {/* <Route path="try" element={<Try />} /> */}

          {/* Services nested under /services/*, but no wrapper layout */}
          <Route path="services/appdev" element={<Appdev />} />
          <Route path="services/digitalmarketing" element={<Digitalmarketing />} />
          <Route path="services/ecommercedev" element={<Ecommercedev />} />
          <Route path="services/webdev" element={<Webdev />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
