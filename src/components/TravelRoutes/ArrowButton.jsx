import React from "react";
import styled from "styled-components";
import {ReactComponent as ArrowBack} from '../../assets/svg/ArrowBack.svg';
import {ReactComponent as ArrowForward} from '../../assets/svg/ArrowForward.svg';

const StyledButton = styled.button`

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
            <button className="travel-button" onClick={handlePrev} disabled={currentPage === 0}>
                <ArrowBack />
            </button>
            <button className="travel-button" onClick={handleNext} disabled={currentPage === totalPages-1}>
                <ArrowForward />
            </button>                  
        </>
    );
}

export default ArrowButton;