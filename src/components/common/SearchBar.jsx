import {React, useState, useEffect} from "react";
import styled from "styled-components";
import {ReactComponent as SearchIcon} from '../../assets/svg/Search/SearchIcon.svg';

function SearchBar({keyword, onChange}){

    // useEffect(() => {
    //     console.log('tq')
    //     setInputText(keyword);
    // }, [keyword]);

    return (
        <Container className="inIntegrated">
            <Input
                type="text"
                placeholder="어디로 여행을 떠나시나요?"
                aria-label="Search destinations"
                value={keyword}
                onChange={(e) => onChange(e.target.value)}
            />
            <Button type="submit"><SearchIcon /></Button>
        </Container>
    )
}
export default SearchBar;

const Container = styled.div`
    display: flex;
    border: 2px solid #529B40;
    border-radius: 30em;
    padding: 5px 15px 5px 20px;
    width: 20em;
    height: 2em;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    border: none;
    width: 100%;

    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    border: none;
    background-color: unset;
    
    &:hover{
        background-color: unset;
        cursor: pointer;
    }
`