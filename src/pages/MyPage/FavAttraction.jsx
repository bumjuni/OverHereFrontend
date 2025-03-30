import {React, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import DropDown from "../../components/SearchPage/DropDown";
import MoreContentsButton from "../../components/common/MoreContentsButton";
import Card from "../../components/common/Card";
import getRegion from "../../components/common/getRegion";
import getNonObstacleList from "../../components/common/getNonObstacleList";
import axiosInstance from "../../api/axios";
import paging from "../../components/common/paging";
import SideBar from "../../components/MyPage/SideBar";
import formatTwoDigits from '../../components/common/formatTwoDigits';

const region = ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연', '문화/역사', '음식/미식', '축제/이벤트'];

function FavAttraction() {
    const page = useRef(0);
    const totalPages = useRef(0);
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const [data, setData] = useState([]);
    const [count, setCount] = useState(formatTwoDigits(0));

    const fetchFavAttraction = async () => {
        try{
            const favAttraction = await axiosInstance.get(`/api/v1/mypage/touristAttraction/likes?page=${page.current}`);
            totalPages.current = favAttraction.data.totalaPages;
            setData(...favAttraction.data.contents);
        } catch (err) {
            console.log(err);
            alert(`${err.code}: 관광지 즐겨찾기 데이터를 불러오는 데 실패했습니다.`);
        };
    };
    const fetchCounts = async () => {
        try{
            const res = await axiosInstance.get(`/api/v1/likes/touristAttraction`);
            setData(res.length);
        } catch (err) {
            console.log(err);
            alert(`${err.code}: 관광지 즐겨찾기 개수를 불러오는데 실패했습니다.`);
        };    }

    useEffect(() => {
        fetchFavAttraction();
        fetchCounts();
    }, []);
    
    const handleMoreContents = () => {
        page.current += 1;
        fetchFavAttraction();
    }

    return (
        <Container>
            <SideBar />
            <Contents>
                <h3>관광지 즐겨찾기</h3>
                <SearchGroup>
                    <DropDownGroup>
                        <DropDown 
                                title={selectedReg || '지역'} data={region} onChange={setSelectedReg}
                        />
                        <DropDown 
                            title={selectedType || '유형'} data={type} onChange={setSelectedType}
                        />
                    </DropDownGroup>
                    <p>총 <Stressed>{formatTwoDigits(count)}</Stressed>개</p>
                </SearchGroup>

                <CardList>
                    {data.map((card, index) => (
                    <Card
                    key={index}
                    contentId={card.touristAttractionId}
                    title={card.title}
                    region={getRegion(card.areaCode)}
                    // description={card.description}
                    image={card.thumbnailUrl}
                    nonObstacle={getNonObstacleList(card)}  //무장애정보 리스트
                    />
                    ))}
                </CardList>
                <ButtonWrapper>
                    {paging(totalPages.current, page.current) && <MoreContentsButton onClick={handleMoreContents} /> }
                </ButtonWrapper>

            </Contents>


        </Container>
    )
}
export default FavAttraction;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 18em);
    margin-bottom: 2em;
`
const SearchGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
    gap: 16px;
` 
const DropDownGroup = styled.div`
    display: flex;
    gap: 12px;
`
const Stressed = styled.span`
    font-weight: bold;
    color: #529B40;
`
const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    .card {
        width: calc((100% - 16px * 2) / 3)
    }
`
const ButtonWrapper = styled.div`
    margin-top: 7em;
`