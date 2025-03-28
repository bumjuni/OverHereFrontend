//푸터 내 이용약관 페이지

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";

const PrivacyPolicyPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`/docs/PrivacyPolicy.md`)
      .then((response) => response.text())
      .then((text) => setData(text))
      .catch((error) => console.error("Markdown 파일 읽기 오류:", error));
  })

  return (
    <Container>
      <ReactMarkDown>
        {data}
      </ReactMarkDown>
    </Container>

  )
};

export default PrivacyPolicyPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3em;
`