import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutes from './pages/TravelRoutesPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutes />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;