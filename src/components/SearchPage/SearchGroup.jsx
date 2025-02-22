import {React, useState, useEffect} from "react";
import styled from "styled-components";
import RefreshButton from "./RefreshButton";
import SearchInput from "./SearchInput";
import DropDown from "./DropDown";

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
const region = ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연', '문화/역사', '음식/미식', '축제/이벤트'];


function SearchGroup({handleSubmit}) {
    const [selectedReg, setSelectedReg] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [searchWord, setSearchWord] = useState(null);

    return (
        <Wrapper>
            <RefreshButton />
            <SearchForm onSubmit={(e) => handleSubmit(e, selectedReg, selectedType, searchWord)}>
                <DropDown 
                    title={selectedReg || '지역'} data={region} onChange={setSelectedReg}
                />
                <DropDown 
                    title={selectedType || '유형'} data={type} onChange={setSelectedType}
                />
                <SearchInput onChange={setSearchWord} searchWord={searchWord} />
            </SearchForm>
        </Wrapper>
    );
}

export default SearchGroup;