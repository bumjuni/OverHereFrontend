import { replace } from "react-router-dom";

function formatDate(date){
    date.slice(0, 10);
    date.replace('-', '.');
    return date
}

export default formatDate