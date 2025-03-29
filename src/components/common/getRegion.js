const getRegion = (areaCode) => {
    switch(areaCode) {
        case 1:
            return "서울";
        case 31:
            return "경기도";
        case 32:
            return "강원도";
        case 33:
            return "충청도";
        case 35:
            return "경상도";
        case 37:
            return "전라도";
        case 39:
            return "제주도";
        default:
            return "지역 정보 없음";
    }
};

export default getRegion;