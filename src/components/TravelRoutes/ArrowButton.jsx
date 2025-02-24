import React from "react";
import styled from "styled-components";
import {ReactComponent as ArrowBack} from '../../assets/svg/ArrowBack.svg';
import {ReactComponent as ArrowForward} from '../../assets/svg/ArrowForward.svg';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2em;
  height: 3.2em;
  background-color: unset;
  border: 2px solid #505458;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover{
    background-color: #eaeaea;
  }

  &:disabled{
    border: 1px solid #505458;
    opacity: .5;
    cursor: not-allowed;
  }
`

function ArrowButton({onChange, currentPage, totalPages}){
    const handleNext = () => {
        if (currentPage < totalPages-1) {
          onChange(currentPage + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentPage > 0) {
          onChange(currentPage - 1);
        }
      };  

    return (
        <>
            <StyledButton onClick={handlePrev} disabled={currentPage === 0}>
                <ArrowBack />
            </StyledButton>
            <StyledButton onClick={handleNext} disabled={currentPage === totalPages-1}>
                <ArrowForward />
            </StyledButton>                  
        </>
    );
}

export default ArrowButton;