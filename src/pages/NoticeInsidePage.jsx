//푸터 내 공지사항 클릭 -> 공지사항 내용 확인 
//공지사항 내용 페이지

import { React, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import formatDate from "../components/common/formatDate";
import axiosInstance from '../api/axios';

const initialData = {
  id: 0,
  title: "[공지사항] 여기너머 시스템 점검 안내(0214~)",
  content: "null",
  createdAt: "2025-01-01T00:00:00",
}

const NoticeInsidePage = () => {
  const [noticeData, setNoticeData] = useState(initialData);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate("/notice");
  };

  useEffect(() => {
    axiosInstance.get(`/api/v1/notices/${id}`)
      .then(res => setNoticeData(res.data))
      .catch(err => alert(`공지사항을 불러오는데 실패했습니다 id: ${id}`))
  }, [id])

  return (
    <Container>
      <Title>
        <h4>{noticeData.title}</h4>
        <p>{formatDate(noticeData.createdAt)}</p>
      </Title>
      <Contents>
        {noticeData.content}
      </Contents>
      <NoticeListButton onClick={handleBack}>
        목록
      </NoticeListButton>
    </Container>
  );
};

export default NoticeInsidePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const NoticeListButton = styled.button`
  align-self: center;
  padding: 0.7em 4em;
  margin: 3em;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #505458;
  border-radius: 50px;
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
`
const Title = styled.div`
  border-bottom: 1px solid #505458;
  h4 {
    margin: 0;
  }
  p {
    margin: .5em 0 1.5em 0; 
    font-size: 14px;
    font-weight: 500;
    color: #505458;
  }
`
const Contents = styled.p`
  font-size: 12px;
`