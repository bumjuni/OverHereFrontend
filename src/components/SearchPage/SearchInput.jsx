import React from "react";
import styled from "styled-components";
import {ReactComponent as SearchIcon} from '../../assets/svg/Search/SearchIcon.svg';

const Wrapper = styled.div`
    display: inline-flex;
    border-bottom: solid 2px #4caf50;   
    input{
        border: none;
        font-size: 12px;
        width: 18em;    
    }
    input:focus{
        outline: none;
    }
`
const StyledButton = styled.button`
    border: none;
    background-color: unset;
`

function SearchInput({searchWord, onChange}){
    return (
        <Wrapper>
            <input type="text" placeholder="검색어를 입력하세요" onChange={(e)=>onChange(e.target.value)} value={searchWord}></input>
            <StyledButton><SearchIcon/></StyledButton>
        </Wrapper>
    );
}

export default SearchInput;