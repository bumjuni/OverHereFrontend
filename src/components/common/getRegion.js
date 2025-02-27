function getRegion(areaCode) {
    let region;
    switch(areaCode){
        case 0: 
            region = "서울";
            break;
        case 1: 
            region = "경기도";
            break;
        case 2: 
            region = "강원도";
            break;
        case 3: 
            region = "전라도";
            break;
        case 4: 
            region = "충청도";
            break;
        case 5: 
            region = "경상도";
            break;
        case 6:
            region = "제주도";
            break;
        default:
            region = null;
            break;
    }
    return region;
}

export default getRegion;