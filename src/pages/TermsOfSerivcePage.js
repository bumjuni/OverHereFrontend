//푸터 내 이용약관 페이지

import React from "react";
import styled from "styled-components";
import termsOfService from'../assets/doc/TermsOfService.json'


const TermsOfServicePage = () => {

  const printParagraph = (list) => {
    const result = [];
    list.map((item) => {
      if (item.subParagraph)  result.push(printParagraph(item.subParagraph));
      else                    result.push(<Paragraph>{item}</Paragraph>)
    })
    return <Section>{result}</Section>;
  }

  return (
    <>
      <h1>{termsOfService.title}</h1>
      <Container>
        <p>{termsOfService.introduction}</p>
        <p>{termsOfService.effectiveDate}</p>

        {termsOfService.sections.map((section, index) => (
          <div key={index}>
            <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}>{section.article}</h2>
            <p>{section.introduction}</p>
            {printParagraph(section.paragraph)}
          </div>
        ))}
      </Container>
    </>
  );
};

export default TermsOfServicePage;

const Container = styled.div`
  font-size: 14px;
  line-height: 1.5; 
`
const Section = styled.ol`
  margin: 1.5em 0;
  list-style-position: outside;
  ol {
    list-style-type: lower-roman;
    line-height: 1;
    font-size: 12px;
  }
`
const Paragraph = styled.li`
  margin: 1em 0;
`
