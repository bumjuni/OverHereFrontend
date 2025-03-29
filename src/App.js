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
import MyPage from './pages/MyPage/MyPage';
import FavAttraction from './pages/MyPage/FavAttraction';
import FavCourse from './pages/MyPage/FavCourse';
import MyQnA from './pages/MyPage/MyQnA';
import FrequentQnA from './pages/MyPage/FrequentQnA';
import PersonalQnA from './pages/MyPage/PersonalQnA';
import MyInfo from './pages/MyPage/MyInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
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
        <Route path="/course-details/:courseId" element={<CourseDetailPage />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
        <Route path="/mypage/favorite-attractions" element={<FavAttraction />} />
        <Route path="/mypage/favorite-courses" element={<FavCourse />} />
        <Route path="/mypage/my-QnA" element={<MyQnA />} />
        <Route path="/frequent-QnA" element={<FrequentQnA />} />
        <Route path="/1:1-QnA" element={<PersonalQnA />} />
        <Route path="/mypage/info" element={<MyInfo />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
};

export default App;