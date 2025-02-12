//푸터 내 이용약관 페이지

import React from "react";

const termsOfServiceText = {
  title: "이용약관",
  introduction: "여기너머(이하 ‘회사’라 함)는 『개인정보 보호법』 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 이용약관을 수립·공개합니다.",
  effectiveDate: "이 이용약관은 2024년 00월 00일부터 적용됩니다.",
  sections: [
    {
      title: "제 1조 (목적)",
      content: "이 약관은 ‘여기너머’(이하 ‘사이트’)가 제공하는 모든 서비스(이하 ‘서비스’)의 이용조건 및 권리, 의무/책임 등 사이트의 관리, 유지, 무사작동 및 기타 필요한 사항을 규정함을 목적으로 합니다."
    },
    {
      title: "제 2조 (약관의 효력과 변경)",
      list: [
        "본 사이트는 이용자의 편의를 위해 약관을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 명시됩니다.",
        "약관 변경 이후에도 서비스를 계속 이용하는 경우, 변경된 약관을 승인한 것으로 간주됩니다.",
        "이용자는 약관에 동의하지 않을 경우, 서비스 이용을 중단할 수 있습니다."
      ]
    },
    {
      title: "제 3조 (용어의 정의)",
      list: [
        "서비스: ‘여기너머’가 제공하는 서비스(웹사이트, 부가서비스 포함)",
        "회원: 회사와 서비스 이용계약을 맺고 ‘여기너머’에 가입한 사용자",
        "소셜 로그인 인증: 사용자가 자신의 SNS 계정을 통해 사이트에 로그인하는 기능"
      ]
    },
    {
      title: "제 4조 (이용 계약의 성립)",
      list: [
        "이용계약은 신청자가 회사의 운영방침을 준수하고 사이트에서 제공하는 절차를 완료하여 가입을 신청하면 성립됩니다.",
        "사용자는 허위 정보를 기재해서는 안 됩니다.",
        "회사는 부정 이용 방지를 위해 특정 사용자의 가입을 제한할 수 있습니다."
      ]
    },
    {
      title: "제 5조 (개인정보)",
      content: "회사는 가입 절차에서 제공된 개인정보를 보호하기 위해 최선을 다합니다. 자세한 개인정보 보호 정책은 별도의 개인정보처리방침에서 확인 가능합니다."
    },
    {
      title: "제 6조 (서비스)",
      list: [
        "회사는 사용자가 다양한 서비스를 이용할 수 있도록 제공합니다.",
        "서비스의 내용은 회사 정책에 따라 변경될 수 있습니다.",
        "서비스 이용 시 발생하는 데이터 비용은 이용자가 부담해야 합니다."
      ]
    },
    {
      title: "제 7조 (손해배상)",
      content: "회사는 천재지변, 서비스 장애 등 불가피한 사유로 인해 발생한 손해에 대해 책임을 지지 않습니다."
    }
  ]
};

const TermsOfServicePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "80%", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>{termsOfServiceText.title}</h1>
      <p>{termsOfServiceText.introduction}</p>
      <p>{termsOfServiceText.effectiveDate}</p>
      {termsOfServiceText.sections.map((section, index) => (
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

export default TermsOfServicePage;
