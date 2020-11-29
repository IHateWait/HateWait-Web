import React from 'react';
import styled, {keyframes} from 'styled-components';
import perDay from '../testdata/perDay.json';

const GraphBox = styled.div
`
    width: 640px;
    height: 300px;
    margin: auto;
    display: flex;
`

const LeftSide = styled.div`
    width: 30px;
    height: 300px;
    border-right: solid;
    text-align: center;
`

const LeftTopText = styled.div`
    width: 30px;
    font-size: 0.7em;
    position: relative;
    top: 0;
`

const LeftBottomText = styled.div`
    width: 30px;
    font-size: 0.8em;
    position: relative;
    margin-top: 270px;
`

const GraphBarBox = styled.div
`
    width: 610px;
    height: 300px;
    display: flex;
    justify-content: space-around;
`

const GraphBarBoxBlock = styled.div<{
    width: number;
}>
`
    width: ${props => props.width}%;
    height: 300px;
    .number{
        font-size: 0.875em;
        display: none;
    }
    &:hover{
        .number{
            display: flex;
            position: fixed;
            top: 350px;
            z-index: 3;
        }
    }
`

const GraphBar = styled.div
`
    background: #bb66ba;
    width: 100%;
    height: 270px;
`

const Barhide = styled.div<{
    height: number;
}>
`
    background: #fff;
    width: 100%;
    height: ${props => props.height}%;
    animation-name: slide-up;
    animation-duration: 1s;
    }
    @keyframes slide-up {
        0% { height: 270px; }
        30% { height: 200px; }
        40% { height: ${props => props.height}+10%; }
        100% { height: ${props => props.height}%; }
    }
`

const GraphBarText = styled.div
`
    background: #fff;
    width: 100%;
    text-align: center;
    font-size: 0.5em;
`

function StaticGraph(){

    const max = 150; //최댓값
    const unit = "시간"; //단위
    const date = "20-11-08";

    let i = 0;

    const graphData = perDay.map((perDay, i) => {
        if (i > 20) {
            return(
                <GraphBarBoxBlock width={(20/470)*100}>
                    <div className="number">{perDay.number}명</div>
                    <GraphBar>
                        <Barhide height={100-(perDay.number*100)/max}/>
                    </GraphBar>
                    <GraphBarText>
                        {perDay.time}
                    </GraphBarText>
                </GraphBarBoxBlock>
            );
        }
    })

    return(
        <GraphBox>
            <LeftSide>
                <LeftTopText>
                    {max}
                </LeftTopText>
                <LeftBottomText>
                    {unit}
                </LeftBottomText>
            </LeftSide>
            <GraphBarBox>
                {graphData}
            </GraphBarBox>
        </GraphBox>
    );
}

export default StaticGraph;