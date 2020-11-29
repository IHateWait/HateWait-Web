import React from 'react';
import styled from 'styled-components';
import perDay from '../testdata/perDay.json';

function StaticGraphContainer(){
    React.useEffect(()=>{
        console.log("첫 랜더링입니다.");
        //FIXME: 첫 렌더링 때, 모든 데이터를 가져옴
        const dayData = perDay;
    });

    const [day, setDay] = React.useState(0);
    const [week, setWeek] = React.useState(0);
    const [month, setMonth] = React.useState(0);
    const [year, setYear] = React.useState(0);


}