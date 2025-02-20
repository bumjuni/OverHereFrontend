import dummyImg from '../../assets/image/dummy/dummy_img4.jpg';
import Badge from '../common/Badge';
import { ReactComponent as RouteIcon } from "../../assets/svg/TravelRoutes/Route_Pictogram.svg";
import './BestCourseCard.css';

import {ReactComponent as TotalDist} from '../../assets/svg/TotalDistance.svg';


// RouteIcon svg설정 수정.. current로 변경

function BestCourseCard({rank, img, name}){
    return (
        <div className="best-card">
            <div>
                <div className="rank">
                    Best <br /> {rank}
                </div>
                <img src={img} alt={name} className="best-image" height="218" width="382" />
            </div>
            <div className="rec-contents">
                <Badge text="지역" color="gray" />
                <Badge text="코스 설명" color="yellow" />
                <h2>텍스트</h2>
                <p>코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 </p>
                <div className="best-badges">
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                </div>
                <p className="totalKM"><TotalDist /> 총 00KM  </p>
            </div>
        </div>
    );
}

export default BestCourseCard;