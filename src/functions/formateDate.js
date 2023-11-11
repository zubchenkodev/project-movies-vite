const formateDate = (inputDate) => {
    if(!inputDate) return;
    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const formattedDate = new Date(`${year}-${month}-${day}`);

    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];

    const monthName = monthNames[formattedDate.getMonth()];

    const formattedDateString = `${monthName} ${day}, ${year}`;
   
    return formattedDateString;
}

export {formateDate};