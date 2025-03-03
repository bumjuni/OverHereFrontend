import React from "react";

//이메일이나 내용 변경하려면 여기 customerSupportText 변수에서 해주세요
const customerSupportText = {
  title: "고객센터",
  introduction: "여기너머 고객센터입니다. 궁금한 사항이 있으시면 언제든지 문의해주세요.",
  contactInfo: {
    email: "yeogineomeo@gmail.com",
    hours: "평일 09:00 - 18:00 (주말 및 공휴일 휴무)"
  },
  sections: [
    
    {
      title: "1:1 문의하기",
      content: "개인적인 문의사항은 이메일 또는 고객센터로 연락 주세요."
    },
    
  ]
};

//변수를 화면에 띄우는 부분
const CustomerSupportPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "80%", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>{customerSupportText.title}</h1>
      <p>{customerSupportText.introduction}</p>
      
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}>고객센터 연락처</h2>
      <p>이메일: {customerSupportText.contactInfo.email}</p>
      <p>운영 시간: {customerSupportText.contactInfo.hours}</p>
      
      {customerSupportText.sections.map((section, index) => (
        <div key={index}>
          <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}>{section.title}</h2>
          <p>{section.content}</p>
          {section.list && (
            <ul>
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomerSupportPage;
