function formateVote(number) {
    if(!number) return;
    const roundedNumber = number.toFixed(1);
    return parseFloat(roundedNumber); 
}
  
export {formateVote};

  