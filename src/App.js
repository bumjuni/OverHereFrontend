import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutes from './pages/TravelRoutesPage';
import CourseDetails from './pages/CourseDetailPage';
import BestCourse from './pages/BestCoursePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutes />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/best-course" element={<BestCourse />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;