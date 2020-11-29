import React from 'react';

function businessHourModule(
    same: boolean, 
    monBreak: string, 
    tueBreak: string,
    wedBreak: string,
    thuBreak: string,
    friBreak: string,
    satBreak: string,
    sunBreak: string,
    startTime: string,
    endTime: string,
    monStartTime: string,
    monEndTime: string,
    tueStartTime: string,
    tueEndTime: string,
    wedStartTime: string,
    wedEndTime: string,
    thuStartTime: string,
    thuEndTime: string,
    friStartTime: string,
    friEndTime: string,
    satStartTime: string,
    satEndTime: string,
    sunStartTime: string,
    sunEndTime: string,
    ){
        if(same === true){
            let breakDays = '';
            if(monBreak === 'break'){
                breakDays += "월";
            }
            if(tueBreak === 'break'){
                breakDays += ", "+"화";
            }
            if(wedBreak === 'break'){
                breakDays += ", "+"수";
            }
            if(thuBreak === 'break'){
                breakDays += ", "+"목";
            }
            if(friBreak === 'break'){
                breakDays += ", "+"금";
            }
            if(satBreak === 'break'){
                breakDays += ", "+"토";
            }
            if(sunBreak === 'break'){
                breakDays += ", "+"일";
            }
            return(`${startTime} - ${endTime} (휴무 요일: ${breakDays})`);
        }
        else{
            let businessHour = "";
            let breakDays = "";
            if(monBreak === ''){
                businessHour += `월요일:${monStartTime} - ${monEndTime}\n`;
            }
            else{
                breakDays += "월, ";
            }
            if(tueBreak === ''){
                businessHour += `화요일:${tueStartTime} - ${tueEndTime}\n`;
            }
            else{
                breakDays += "화, ";
            }
            if(wedBreak === ''){
                businessHour += `수요일:${wedStartTime} - ${wedEndTime}\n`;
            }
            else{
                breakDays += "수, ";
            }
            if(thuBreak === ''){
                businessHour += `목요일:${thuStartTime} - ${thuEndTime}\n`;
            }
            else{
                breakDays += "목, ";
            }
            if(friBreak === ''){
                businessHour += `금요일:${friStartTime} - ${friEndTime}\n`;
            }
            else{
                breakDays += "금, ";
            }
            if(satBreak === ''){
                businessHour += `토요일:${satStartTime} - ${satEndTime}\n`;
            }
            else{
                breakDays += "토, ";
            }
            if(sunBreak === ''){
                businessHour += `일요일:${sunStartTime} - ${sunEndTime}\n`;
            }
            else{
                breakDays += "일";
            }
            
            return(`${businessHour} (휴무 요일: ${breakDays})`)
        }

}

export default businessHourModule;