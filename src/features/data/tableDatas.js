import { rawData } from './rowData'

export const tableDatas = () => {
    const obj = JSON.parse(rawData);
    let finalData = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let price =  obj[key].weight != '1000' ? parseFloat(obj[key].rate) * parseFloat(obj[key].weight) : parseFloat(obj[key].rate) * 999;
            finalData.push({weight: obj[key].weight, rate: obj[key].rate, price: price.toFixed(2), date: obj[key].date_start});
        }
    }

    let arrayOfDates = new Set(finalData.map(elm => elm.date));
    

    let newResultArray = [...arrayOfDates].map(element => {
        return {date: element, data: finalData.filter(elm => elm.date == element)};
    });

    return newResultArray;

}