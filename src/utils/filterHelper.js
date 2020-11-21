import {sortTypes} from "./../types/filterTypes";

export function getFilteredUser(data,property,type){
    let sortData = [];
    for(let i=0;i<data.length;i++){
        let obj = {};
        obj.key = i;
        const twubric = data[i].twubric;
        obj.value = twubric[property];
        sortData.push(obj);
    }
    if(type===sortTypes.ACCENDING){
        sortData = sortData.sort(function (a, b) {
            return a.value-b.value;
        });
    }
    else{
        sortData = sortData.sort(function (a, b) {
            return b.value-a.value;
        }); 
    }
    let ans = [];
    for(let i=0;i<sortData.length;i++){
        let key = sortData[i].key;
        ans[i] = data[key];
        console.log(ans[i]);
    }
    return ans;
}

export function getUserBetweenDates(data,startDate,endDate){
    let fromDate = new Date(startDate).getTime()/1000;
    let toDate = new Date(endDate).getTime()/1000;
    data = data.filter(obj=>{
        if(obj.join_date>=fromDate && obj.join_date<=toDate){
            return true;
        }
        else{
            return false;
        }
    })
    return data;
}