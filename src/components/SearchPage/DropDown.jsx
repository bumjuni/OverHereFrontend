import react, {useState} from 'react';
import './index.css';
import {ReactComponent as ArrowUp} from '../../assets/svg/ArrowUp.svg';
import {ReactComponent as ArrowDown} from '../../assets/svg/ArrowDown.svg';

function DropDown({ title, data }){
    const [isClicked, setIsClicked] = useState(false);
    
    const DropDownList = data.map(item => (
        <button> {item} </button>
    ))

    return (
        <>
            <div >
                <button className='DropDown' 
                    onClick={() => (setIsClicked(!isClicked))}
                    onBlur={() => (setIsClicked(false))}>
                    {title} 
                    {isClicked?<ArrowUp/>:<ArrowDown/>} 
                </button>
                {isClicked &&
                <div className='DropDownList'>
                    {DropDownList}
                </div>
                }
            </div>
        </>
    );
}

export default DropDown;