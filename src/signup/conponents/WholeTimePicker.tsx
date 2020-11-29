import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import time from '../../static/data/time.json';


const TimePickerBlock = styled.div`
    width: 100%;
    margin-top: 20px;
`

const DayBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const BreakDay = styled.div`
    width: 20px;
    cursor: pointer;
    text-align: center;
    .break{
        background: #FF007F;
        border-radius: 5px;
        color: #fff;
    }
`

const TimeBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`

interface WholeTimePickerProps{
    monBreak: string,
    setMonBreak: Function,
    tueBreak: string,
    setTueBreak: Function,
    wedBreak: string,
    setWedBreak: Function,
    thuBreak: string,
    setThuBreak: Function,
    friBreak: string,
    setFriBreak: Function,
    satBreak: string,
    setSatBreak: Function,
    sunBreak: string,
    setSunBreak: Function,
    setStartTime: Function,
    setEndTime: Function,
    startTime: string,
    endTime: string
}

function WholeTimePicker(
    {
        monBreak,
        setMonBreak,
        tueBreak,
        setTueBreak,
        wedBreak,
        setWedBreak,
        thuBreak,
        setThuBreak,
        friBreak,
        setFriBreak,
        satBreak,
        setSatBreak,
        sunBreak,
        setSunBreak,
        setStartTime,
        setEndTime,
        startTime,
        endTime}:WholeTimePickerProps
    ){

    const startTimeData = time.map((time) => {
        return(
            <Dropdown.Item onClick={() => setStartTime(`${time.hour}`)}>{time.hour}</Dropdown.Item>
        );
        }
    );
    const endTimeData = time.map((time) => {
        return(
            <Dropdown.Item onClick={() => setEndTime(`${time.hour}`)}>{time.hour}</Dropdown.Item>
        );
        }
    );

    const CheckBreak = (checkBreak: string, setBreak: Function) =>{
        if(checkBreak === ''){
            setBreak('break');
        }
        else{
            setBreak('');
        }
    }
        return(
            <TimePickerBlock>
                <TimeBlock>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {startTime}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {startTimeData}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>
                    -
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {endTime}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {endTimeData}
                        </Dropdown.Menu>
                    </Dropdown>
                </TimeBlock>

                <div>
                    휴무일
                </div>
                <DayBlock>
                    <BreakDay>
                        <div className={monBreak} onClick={() => CheckBreak(monBreak, setMonBreak)}>월</div>
                    </BreakDay>
                    <BreakDay>
                        <div className={tueBreak} onClick={() => CheckBreak(tueBreak, setTueBreak)}>화</div>
                    </BreakDay>
                    <BreakDay>
                        <div className={wedBreak} onClick={() => CheckBreak(wedBreak, setWedBreak)}>수</div>
                    </BreakDay>
                    <BreakDay>
                        <div className={thuBreak} onClick={() => CheckBreak(thuBreak, setThuBreak)}>목</div>
                    </BreakDay>
                    <BreakDay>
                        <div className={friBreak} onClick={() => CheckBreak(friBreak, setFriBreak)}>금</div>
                    </BreakDay>
                    <BreakDay>
                        <div className={satBreak} onClick={() => CheckBreak(satBreak, setSatBreak)}>토</div>
                    </BreakDay>
                    <BreakDay>
                        <div className={sunBreak} onClick={() => CheckBreak(sunBreak, setSunBreak)}>일</div>
                    </BreakDay>
                </DayBlock>
            </TimePickerBlock>
        );
    
}

export default WholeTimePicker;