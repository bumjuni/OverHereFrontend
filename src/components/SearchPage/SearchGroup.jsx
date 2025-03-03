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


function SearchGroup(props) {

    return (
        <Wrapper>
            <RefreshButton />
            <SearchForm onSubmit={props.handleSubmit}>
                <DropDown 
                    title={props.selectedReg || '지역'} data={region} onChange={props.setSelectedReg}
                />
                <DropDown 
                    title={props.selectedType || '유형'} data={type} onChange={props.setSelectedType}
                />
                <SearchInput searchWord={props.searchWord} onChange={props.setSearchWord} />
            </SearchForm>
        </Wrapper>
    );
}

export default SearchGroup;