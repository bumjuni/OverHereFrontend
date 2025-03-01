import {React, useState, useEffect} from "react";
import styled from "styled-components";
import RefreshButton from "../SearchPage/RefreshButton";
import DropDown from "../SearchPage/DropDown";

const region = ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연 속 휴식', '액티비티', '체험 여행', '역사 탐방', '핫플 모음', '가족 여행', '커플 여행'];

function SearchGroupNoInput(props) {
    // const [selectedReg, setSelectedReg] = useState(null);
    // const [selectedType, setSelectedType] = useState(null);

    return (
        <Wrapper>
            <RefreshButton />
            {/* <SearchForm onSubmit={(e) => handleSubmit(e, selectedReg, selectedType)}> */}
                <DropDown 
                    title={props.selectedReg || '지역'} data={region} onChange={props.setSelectedReg}
                />
                <DropDown 
                    title={props.selectedType || '코스 테마'} data={type} onChange={props.setSelectedType}
                />
            {/* </SearchForm> */}
        </Wrapper>
    );
}

export default SearchGroupNoInput;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
`
const SearchForm = styled.form`
    display: inline-flex;
    flex-direction: row;
    gap: 10px;
`