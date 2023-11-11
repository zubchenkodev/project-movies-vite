function formateRuntime(minutes) {
    if(!minutes) return;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    if (hours === 0) {
      return `${remainingMinutes} minutes`;
    } else {
      const hoursText = hours === 1 ? "hour" : "hours";
      const minutesText = remainingMinutes === 1 ? "minute" : "minutes";
  
      return `${hours} ${hoursText} ${remainingMinutes} ${minutesText}`;
    }
}

export {formateRuntime};