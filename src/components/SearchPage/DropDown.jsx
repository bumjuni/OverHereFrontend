import react, {useState} from 'react';
import './index.css';
import {ReactComponent as ArrowUp} from '../../assets/svg/ArrowUp.svg';
import {ReactComponent as ArrowDown} from '../../assets/svg/ArrowDown.svg';

function DropDown({ title, data, onChange }){
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (e) => onChange(e.target.id);
    
    const DropDownList = data.map(item => (
        <button id={item} onClick={handleClick}> {item} </button>
    ))

    return (
        <>
            <div 
                onClick={() => (setIsClicked(!isClicked))}
                onBlur={()=> (setIsClicked(false))}
            >
                <button className='DropDown'>
                     {title} 
                    {isClicked?<ArrowUp/>:<ArrowDown/>} 
                </button>

                {isClicked &&
                <div className='DropDownList' onMouseDown={(e) => e.preventDefault()}>
                    {DropDownList}
                </div>
                }


            </div>
        </>
    );
}

export default DropDown;