import react, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowUp} from '../../assets/svg/Search/ArrowUp.svg';
import {ReactComponent as ArrowDown} from '../../assets/svg/Search/ArrowDown.svg';

const DropDownButton = styled.button`
    display: inline-flex;
    align-items: center;
    color: #505458;
    background-color: unset;
    border: 1px solid #529B40;
    border-radius: 7px;
    padding: 0.7em 1em;
    font-size: 12px;
    gap: 5px;
    cursor: pointer;
`
const Menu = styled.button`
    background-color: unset;
    color: #505458;
    cursor: pointer;
    border: none;
    padding: 0.8em;
`
const DropDownMenu = styled.div`
    position: absolute;
    display: flex; 
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    width: 10em;
    margin: 15px;
    box-shadow: 0px 0px 5px #B5B9BD;
    right: -90%;
    z-index: 1;
`
const Wrapper = styled.div`
    position: relative;
`

function DropDown({ title, data, onChange }){
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (e) => onChange(e.target.id);
    
    const DropDownList = data.map(item => (
        <Menu id={item} onClick={handleClick}> {item} </Menu>
    ))

    return (
        <Wrapper 
            onClick={() => (setIsClicked(!isClicked))}
            onBlur={()=> (setIsClicked(false))}
        >
            <DropDownButton type="button">
                {title} 
                {isClicked?<ArrowUp/>:<ArrowDown/>} 
            </DropDownButton>

            {isClicked &&
            <DropDownMenu onMouseDown={(e) => e.preventDefault()}>
                {DropDownList}
            </DropDownMenu>
            }
        </Wrapper>
    );
}

export default DropDown;