import {React, useState} from "react";
import styled from "styled-components";
import DropDown from "../../components/SearchPage/DropDown";
import MoreContentsButton from "../../components/common/MoreContentsButton";


function FavAttraction({region, type}) {
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    
    return (
        <>
            <h3>관광지 즐겨찾기</h3>
            <DropDown 
                    title={selectedReg || '지역'} data={region} onChange={setSelectedReg}
            />
            <DropDown 
                title={selectedType || '유형'} data={type} onChange={setSelectedType}
            />
            <p>총 00개</p>
            <MoreContentsButton />

        </>
    )
}
export default FavAttraction;

 