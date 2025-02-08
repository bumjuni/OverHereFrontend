import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutes from './pages/TravelRoutesPage';
import LocalSign from './pages/LocalSign';
import SocialSign from './pages/SocialSign';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutes />} />
        <Route path="/sign" element={<SocialSign />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;