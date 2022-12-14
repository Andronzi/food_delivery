export const getDate = (time: Date) => {
    const newTime = new Date(
        time.getFullYear(),
        time.getMonth(),
        time.getDate(),
    );
    
    return newTime.toLocaleDateString();
}

export const getDateAsISO = (time: Date) => {
    return time.toISOString().split("T")[0];
}

export const getTime = (time: Date) => {
    const newTime = new Date(
        time.getFullYear(),
        time.getMonth(),
        time.getDate(),
        time.getHours(),
        time.getMinutes(),
      );
    
    return newTime.toLocaleTimeString().substring(0, 5);
}

export const getDateTime = (time: Date) => {
    const newTime = new Date(
        time.getFullYear(),
        time.getMonth(),
        time.getDate(),
        time.getHours(),
        time.getMinutes(),
      );
    
      return newTime.toLocaleDateString() + " " + newTime.toLocaleTimeString().substring(0, 5);
}