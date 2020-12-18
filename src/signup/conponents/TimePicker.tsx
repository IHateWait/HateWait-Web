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
    .break{
        width: 60px;
        display: flex;
        justify-content: space-between;
    }
    .text{
        margin-top: -5px;
    }
`

const TimeBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

interface TimePickerProps {
    day: string;
    checkBreak: string;
    setBreak: Function;
    setStartTime: Function;
    setEndTime: Function;
    startTime: string;
    endTime: string;
}

function TimePicker({day, startTime, endTime, checkBreak, setBreak, setStartTime, setEndTime}: TimePickerProps){

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

    const CheckBreak = () =>{
        if(checkBreak === ''){
            setBreak(`${day}`);
        }
        else{
            setBreak('');
        }
    }

    if(checkBreak === ''){
        return(
            <TimePickerBlock>
                <DayBlock>
                    <div>{day}요일</div>
                    <div className="break">
                        <div className="text">휴무일</div>
                        <input name="breakTime" type="checkbox" onChange={CheckBreak}/>
                    </div>
                </DayBlock>
    
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
            </TimePickerBlock>
        );
    }
    else{
        return(
            <DayBlock>
            <div>{day}</div>
            <div className="break">
                <div className="text">휴무일</div>
                <input name="breakTime" type="checkbox" defaultChecked={true} onChange={CheckBreak}/>
            </div>
            </DayBlock>
        )
    }
    
    
}

export default TimePicker;