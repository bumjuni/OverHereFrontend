import React from "react";

const privacyPolicyText = {
  title: "개인정보처리방침",
  introduction: "여기너머(이하 \"회사\"라 함)는 『개인정보 보호법』 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 개인정보처리방침을 수립·공개합니다.",
  effectiveDate: "이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다.",
  sections: [
    {
      title: "제 1조 개인정보의 수집·이용 목적",
      content: "회사는 회원 가입, 서비스 제공, 고객 상담, 문의 응대 등의 목적으로 개인정보를 처리합니다."
    },
    {
      title: "제 2조 개인정보의 처리 및 보유 기간",
      content: "회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 동의받은 기간 내에서 개인정보를 보유합니다. 각 개인정보의 처리 및 보유 기간은 다음과 같습니다.",
      list: [
        "홈페이지 회원가입: 회원 탈퇴 완료 시까지 보관 (단, 선택 정보는 수신 동의 철회 및 회원 탈퇴 완료 시까지 보관)",
        "만족도 조사: 설문 완료 후 2개월 보관 (단, 여기너머 회원인 경우 회원 탈퇴 완료 시까지 보관)",
        "개인정보 정정/열람/삭제 신청: 신청일로부터 3년 보관",
        "컴퓨터통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월 보관 (통신비밀보호법 제15조의 2 근거)"
      ]
    },
    {
      title: "추가 보관 사유",
      content: "다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 보관합니다.",
      list: [
        "관계 법령 위반에 따른 수사∙조사 등이 진행 중인 경우: 해당 수사∙조사 종료 시까지 보관",
        "서비스 이용에 따른 채권∙채무 관계 잔존할 경우: 해당 채권∙채무관계 정산 시까지 보관",
        "재화 또는 서비스 제공의 경우: 재화∙서비스 공급 완료 및 요금 결제∙정산 완료 시까지 보관",
        "예외 사유가 발생하는 경우: 관련 법령 및 정책에 따라 별도 보관"
      ]
    },
    {
      title: "제 3조 개인정보의 제3자 제공",
      content: "여기너머 서비스는 원칙적으로 이용자의 개인정보를 제1조 (개인정보의 처리 목적)에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다."
    },
    {
      title: "제 4조 개인정보의 파기절차 및 방법",
      content: "개인정보는 보유 기간이 경과하거나 처리 목적이 달성된 후 즉시 파기됩니다. 개인정보 파기의 절차 및 방법은 다음과 같습니다.\n\n1) 파기 절차\n회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인받아 개인정보를 파기합니다.\n\n2) 파기 방법\n회사는 전자적 파일 형태로 기록∙저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록∙저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다."
    },
    {
      title: "제 5조 정보주체의 권리 및 행사 방법",
      content: "정보주체는 언제든지 개인정보 열람, 정정, 삭제, 처리 정지 등을 요청할 수 있습니다."
    },
    {
      title: "제 6조 개인정보 자동 수집 장치의 설치·운영 및 거부 방법",
      content: "회사는 쿠키(cookie)를 사용하며, 정보주체는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다."
    },
    {
      title: "제 7조 개인정보 보호책임자",
      content: "개인정보 보호책임자: ○○○ (이메일: yeogineomeo@gmail.com)"
    },
    {
      title: "제 8조 정보주체의 권익침해에 대한 구제 방법",
      list: [
        "개인정보침해 신고센터: 118 (privacy.kisa.or.kr)",
        "대검찰청: 1301 (www.spo.go.kr)",
        "경찰청: 182 (cyberbureau.police.go.kr)"
      ]
    },
    {
      title: "제 9조 개인정보 처리방침 변경",
      content: "본 방침은 2025년 1월 1일부터 적용됩니다."
    }
  ]
};

const PrivacyPolicyPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "80%", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>{privacyPolicyText.title}</h1>
      <p>{privacyPolicyText.introduction}</p>
      <p>{privacyPolicyText.effectiveDate}</p>
      {privacyPolicyText.sections.map((section, index) => (
        <div key={index}>
          <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}>{section.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{section.content}</p>
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
export default PrivacyPolicyPage;