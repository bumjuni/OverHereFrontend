import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutes from './pages/TravelRoutesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;