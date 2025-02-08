import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutes from './pages/TravelRoutesPage';
import CourseDetails from './pages/CourseDetailPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoticePage from "./pages/NoticePage";  // 공지사항 페이지
import NoticeInsidePage from "./pages/NoticeInsidePage"; // 공지사항 상세 페이지
import TravelDetails from './pages/TravelDetailPage';

import PictogramIcons from './components/common/PictogramIcons';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutes />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeInsidePage />} />
        <Route path="/travel-details" element={<TravelDetails />} />

        <Route path="/temp" element={<PictogramIcons />} />

      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;