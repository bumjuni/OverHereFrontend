import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TravelRoutesPage from './pages/TravelRoutesPage';
import LocalSign from './pages/LocalSign';
import SocialSign from './pages/SocialSign';
import BestCourse from './pages/BestCoursePage';
import SearchPage from './pages/SearchPage';
import CourseDetailPage from './pages/CourseDetailPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoticePage from "./pages/NoticePage";  // 공지사항 페이지
import NoticeInsidePage from "./pages/NoticeInsidePage"; // 공지사항 상세 페이지
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfSerivcePage';
import CustomerSupportPage from './pages/CustomerSupportPage';
import RecCoursePage from './pages/RecCoursePage';
import IntegrateSearch from './pages/IntegrateSearch';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-routes" element={<TravelRoutesPage />} />
        <Route path="/sign" element={<SocialSign />} />
        <Route path="/best-course" element={<BestCourse />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeInsidePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} /> 
        <Route path="/help" element={<CustomerSupportPage />} /> 
        <Route path="/recommend-course" element={<RecCoursePage />} />
        <Route path="/tourist-attraction-search" element={<SearchPage />} />
        <Route path="/search" element={<IntegrateSearch />} />
        <Route path="/course-details" element={<CourseDetailPage />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;