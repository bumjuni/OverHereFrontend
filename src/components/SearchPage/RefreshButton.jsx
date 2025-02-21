import react from 'react';
import {ReactComponent as RefreshIcon} from '../../assets/image/RefreshIcon.svg';
import './index.css';

function RefreshButton(){
    
    return (
        <>
            <button className='refresh-button'> <RefreshIcon /> 초기화 </button>
        </>
    );
}

export default RefreshButton;