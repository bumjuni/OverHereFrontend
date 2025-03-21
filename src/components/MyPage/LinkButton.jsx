import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LinkButton({name, link, onClick}){
    return (
        <Button onClick={onClick}>{name}</Button>
    )
}

export default LinkButton;

const Button = styled.button`
    width: 100%;
    text-align: left;
    padding: 1em 1.5em;
    background-color: unset;
    border: none;
    font-weight: bold;
    &:hover {
        background-color: #F3F5F7;
        color: #1A661B;
        cursor: pointer;
    }
`
