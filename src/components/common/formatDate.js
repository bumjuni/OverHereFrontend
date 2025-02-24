import { replace } from "react-router-dom";

function formatDate(date){
    const newDate = date.slice(0,10).replace(/-/g, '.');
    return newDate
}

export default formatDate