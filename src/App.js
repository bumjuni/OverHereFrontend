import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutes from './pages/TravelRoutesPage';
import LocalSign from './pages/LocalSign';
import SocialSign from './pages/SocialSign';
import CourseDetails from './pages/CourseDetailPage';
import BestCourse from './pages/BestCoursePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoticePage from "./pages/NoticePage";  // 공지사항 페이지
import NoticeInsidePage from "./pages/NoticeInsidePage"; // 공지사항 상세 페이지

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutes />} />
        <Route path="/sign" element={<SocialSign />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/best-course" element={<BestCourse />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeInsidePage />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;