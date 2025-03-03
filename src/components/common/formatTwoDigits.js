function formatTwoDigits(number){
    return (number<10)? '0'+`${number}` : `${number}`;
}

export default formatTwoDigits;