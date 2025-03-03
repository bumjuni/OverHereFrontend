import React from "react";
import styled from "styled-components";
import privacyPolicy from '../assets/docs/PrivacyPolicy.json';

const PrivacyPolicyPage = () => {
  const printContent = (content) => {
    const result = [];
    content.map((item) => {
      if (item.content)  result.push(printContent(item.content));
      else                    result.push(<Paragraph>{item}</Paragraph>)
    })
    return <Section>{result}</Section>;
  }

  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>{privacyPolicy.title}</h1>
      <Container>
        <p>{privacyPolicy.introduction}</p>
        <p>{privacyPolicy.effectiveDate}</p>

        {privacyPolicy.sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            {printContent(section.content)}
          </div>
        ))}
        </Container>
    </>
  );
};
export default PrivacyPolicyPage;

const Container = styled.div`
  font-size: 14px;
  line-height: 1.5; 
`
const Section = styled.ol`
  margin: 1.5em 0;
  list-style-position: outside;
  ol {
    list-style-type: lower-latin;
    line-height: 1;
    font-size: 12px;
  }
  ol ol{
    list-style-type: disc;
  }
`
const Paragraph = styled.li`
  margin: 1em 0;
`
