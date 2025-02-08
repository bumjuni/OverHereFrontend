import react from 'react';
import MainInfo from '../components/TravelDetails/MainInfo';
import DetailInfo from '../components/TravelDetails/DetailInfo';

function TravelDetails(){
    return (
        <>
            {/* <div className="detail-header">
                <h1> 관광지 </h1>
                <h3> | </h3>
                <h3> 카테고리 혹은 관광지에 대한 한줄설명 </h3>
            </div> */}
            <MainInfo />
            <DetailInfo />
        </>
    );
}

export default TravelDetails;