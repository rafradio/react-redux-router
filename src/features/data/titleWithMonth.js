const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export const titleWithMonth = (newDay) => {
    let resultObj = [];
    newDay.forEach(elm => {
        let currentProjectDay = new Date(elm) != "Invalid Date" ? new Date(elm) : new Date(elm.split(".").reverse().join("."));
        resultObj.push({date: elm, title: `${currentProjectDay.getDate()} ${months[currentProjectDay.getMonth()]} ${currentProjectDay.getFullYear()} года`})
    });
    
    return resultObj;
}