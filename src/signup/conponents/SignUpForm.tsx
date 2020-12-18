import React from 'react'
import styled from 'styled-components';
import TimePicker from './TimePicker';
import idCheckModule from '../../lib/utils/idCheckModule';
import phoneCheckModule from '../../lib/utils/phoneCheckModule';
import { isEmail } from '../../lib/utils/auth';
import ModalWindow from './ModalWindow';
import signUpCheckModule from '../../lib/utils/signUpCheckModule';
import WholeTimePicker from './WholeTimePicker';
import businessHourModule from '../../lib/utils/businessHourModule';
import { useHistory } from 'react-router-dom';


const Button = styled.button
`
    background-color: #66BB6A;
    border-radius: 5px;
    color: #fff;
    width: 280px;
    height: 50px;
    font-size: 2em;
    font-family: 'GmarketSansMedium';
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: #66BB6A;
    }
`

const ButtonBox = styled.div`
    width: 100%;
    text-align: center;
`

const FormBlock = styled.div`
    max-width: 960px;
    width: 100%;
    margin: auto;
    background-color: #F6F6F6;
    flex-direction: column;
    margin-bottom: 100px;
    padding-bottom: 50px;
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const FormBox = styled.div`
    width: 80%;
    margin: auto;
    text-align: left;
`

const Label = styled.div`
    width: 100%;
    text-align: left;
    font-family: 'GmarketSansMedium';
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
`

const InputBox = styled.div`
    width: 60%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: auto;
`

const MiniButton = styled.div`
    width: 60px;
    height: 20px;
    padding-top: 1px;
    text-align: center;
    font-size: 0.75em;
    cursor: pointer;
    border-radius: 5px;
    border: #000 1px solid;
`

const CheckText = styled.div`
    width: 90%;
    height: 20px;
    font-size: 0.75em;
    text-align: left;
    .success{
        color: #1DDB16;
    }
    .fail{
        color: #FF0000;
    }
`

const CheckBlock = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    margin-top: -15px;
`

function SignUpForm(){
    const [id, setId] = React.useState('');
    const [idCheck, setIdCheck] = React.useState('');
    const [idText, setIdText] = React.useState('');
    //아이디 관련

    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [pwCheck, setPwCheck] = React.useState('');
    const [pwText, setPwText] = React.useState('fail');
    //패스워드 관련

    const [name, setName] = React.useState('');
    //가게 이름 관련

    const [number, setNumber] = React.useState('');
    const [numberCheck, setNumberCheck] = React.useState('');
    const [numberText, setNumberText] = React.useState('');
    //가게 번호 관련

    const [email, setEmail] = React.useState('');
    const [emailCheck, setEmailCheck] = React.useState('');
    const [emailText, setEmailText] = React.useState('');
    //가게 이메일 관련

    const [address, setAddress] = React.useState('');
    //가게 주소 관련

    const [info, setInfo] = React.useState('');
    //가게 정보 관련

    const [maxNumber, setMaxNumber] = React.useState(0);
    //가게 최대 수용인원 관련

    const [businessHour, setBusinessHour] = React.useState('');

    const [same, setSame] = React.useState(true);
    const [startTime, setStartTime] = React.useState('오픈 시간');
    const [endTime, setEndTime] = React.useState('마감 시간');

    const [monStartTime, setMonStartTime] = React.useState("오픈 시간");
    const [monEndTime, setMonEndTime] = React.useState("마감 시간");
    const [monBreak, setMonBreak] = React.useState('');
    const [tueStartTime, setTueStartTime] = React.useState("오픈 시간");
    const [tueEndTime, setTueEndTime] = React.useState("마감 시간");
    const [tueBreak, setTueBreak] = React.useState('');
    const [wedStartTime, setWedStartTime] = React.useState("오픈 시간");
    const [wedEndTime, setWedEndTime] = React.useState("마감 시간");
    const [wedBreak, setWedBreak] = React.useState('');
    const [thuStartTime, setThuStartTime] = React.useState("오픈 시간");
    const [thuEndTime, setThuEndTime] = React.useState("마감 시간");
    const [thuBreak, setThuBreak] = React.useState('');
    const [friStartTime, setFriStartTime] = React.useState("오픈 시간");
    const [friEndTime, setFriEndTime] = React.useState("마감 시간");
    const [friBreak, setFriBreak] = React.useState('');
    const [satStartTime, setSatStartTime] = React.useState("오픈 시간");
    const [satEndTime, setSatEndTime] = React.useState("마감 시간");
    const [satBreak, setSatBreak] = React.useState('');
    const [sunStartTime, setSunStartTime] = React.useState("오픈 시간");
    const [sunEndTime, setSunEndTime] = React.useState("마감 시간");
    const [sunBreak, setSunBreak] = React.useState('');
    //가게 영업시간 관련

    const [visible, setVisible] = React.useState(false);

    function CheckEmail(){
        if(!isEmail(email)){
            setEmailCheck("형식이 올바르지 않습니다.");
            setEmailText("fail");
        }
        else{
            setEmailCheck('이메일 형식이 올바릅니다.');
            setEmailText('success');
        }
    }

    function CheckMatch(){
        if(password === "" || rePassword === ""){
            setPwCheck('비밀번호를 입력해주세요.');
            setPwText('fail');
        }
        else if(password === rePassword){
            setPwCheck('비밀번호가 일치합니다.');
            setPwText('success');
        }
        else{
            setPwCheck('비밀번호가 일치하지 않습니다.');
            setPwText('fail');
        }
    }
    const history = useHistory();

    function SignInPost(){
        signUpCheckModule(businessHour, idText, pwText, numberText, name, emailText, monEndTime, maxNumber, address, info, id, password, number, email);
        history.push(`/success`);
    }

    function HourCheck(){
        setBusinessHour(businessHourModule(same, monBreak, tueBreak, wedBreak, thuBreak, friBreak, satBreak, sunBreak, startTime, endTime, monStartTime, monEndTime, tueStartTime, tueEndTime, wedStartTime, wedEndTime, thuStartTime, thuEndTime, friStartTime, friEndTime, satStartTime, satEndTime, sunStartTime, sunEndTime)); 
        setVisible(true);
        console.log('눌렸습니다.');
    }

    if(same === true){
        return(
            <FormBlock>
                <ModalWindow visible={visible}>
                    <div>{businessHour}</div>
                    <button onClick={() => setVisible(false)}>닫기</button>
                </ModalWindow>
                <FormBox>
                    <InputBox>
                        <Label>아이디</Label>
                        <Input type="text" maxLength={15} onChange={(e) => setId(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                                <div className={idText}>{idCheck}</div>
                            </CheckText>
                            <MiniButton onClick={() => idCheckModule(id, setIdCheck, setIdText)}>
                                중복확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>비밀번호</Label>
                        <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Label>비밀번호 재확인</Label>
                        <Input id="re-password" type="password" onChange={(e) => setRePassword(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                            <div className={pwText}>{pwCheck}</div>
                            </CheckText>
                            <MiniButton onClick={CheckMatch}>
                                일치확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>가게이름</Label>
                        <Input type="text" maxLength={20} onChange={(e) => setName(e.target.value)}/>
                        <Label>전화번호</Label>
                        <Input type="text" maxLength={11} onChange={(e) => setNumber(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                                <div className={numberText}>{numberCheck}</div>
                            </CheckText>
                            <MiniButton onClick={() => phoneCheckModule(number, setNumberCheck, setNumberText)}>
                                중복확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>이메일</Label>
                        <Input type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                            <div className={emailText}>{emailCheck}</div>
                            </CheckText>
                            <MiniButton onClick={CheckEmail}>
                                메일확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>주소</Label>
                        <Input type="text" onChange={(e) => setAddress(e.target.value)}/>
                        <Label>가게 정보</Label>
                        <Input type="text" maxLength={250} onChange={(e) => setInfo(e.target.value)}/>
                        <Label>가게 최대 수용인원</Label>
                        <Input type="number" max={9999} onChange={(e) => setMaxNumber(e.target.valueAsNumber)}/>
                        <WholeTimePicker 
                        monBreak={monBreak} 
                        setMonBreak={setMonBreak}
                        tueBreak={tueBreak} 
                        setTueBreak={setTueBreak}
                        wedBreak={wedBreak} 
                        setWedBreak={setWedBreak}
                        thuBreak={thuBreak} 
                        setThuBreak={setThuBreak}
                        friBreak={friBreak} 
                        setFriBreak={setFriBreak}
                        satBreak={satBreak} 
                        setSatBreak={setSatBreak}
                        sunBreak={sunBreak} 
                        setSunBreak={setSunBreak}
                        setStartTime={setStartTime}
                        setEndTime={setEndTime}
                        startTime={startTime}
                        endTime={endTime}
                    />
                    <MiniButton onClick={() => setSame(false)}>세부설정</MiniButton>
                    <MiniButton onClick={HourCheck}>시간확인</MiniButton>
                    </InputBox> 
                    <ButtonBox>
                        <Button type="submit" onClick={SignInPost}>
                            가입하기
                        </Button>
                    </ButtonBox>
                </FormBox>
            </FormBlock>
        )
    }
    else{
        return(
            <FormBlock>
                <ModalWindow visible={visible}>
                    <div>{businessHour}</div>
                    <button onClick={() => setVisible(false)}>닫기</button>
                </ModalWindow>
                <FormBox>
                    <InputBox>
                        <Label>아이디</Label>
                        <Input type="text" maxLength={15} onChange={(e) => setId(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                                <div className={idText}>{idCheck}</div>
                            </CheckText>
                            <MiniButton onClick={() => idCheckModule(id, setIdCheck, setIdText)}>
                                중복확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>비밀번호</Label>
                        <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Label>비밀번호 재확인</Label>
                        <Input id="re-password" type="password" onChange={(e) => setRePassword(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                            <div className={pwText}>{pwCheck}</div>
                            </CheckText>
                            <MiniButton onClick={CheckMatch}>
                                일치확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>가게이름</Label>
                        <Input type="text" maxLength={20} onChange={(e) => setName(e.target.value)}/>
                        <Label>전화번호</Label>
                        <Input type="text" maxLength={11} onChange={(e) => setNumber(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                                <div className={numberText}>{numberCheck}</div>
                            </CheckText>
                            <MiniButton onClick={() => phoneCheckModule(number, setNumberCheck, setNumberText)}>
                                중복확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>이메일</Label>
                        <Input type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <CheckBlock>
                            <CheckText>
                            <div className={emailText}>{emailCheck}</div>
                            </CheckText>
                            <MiniButton onClick={CheckEmail}>
                                메일확인
                            </MiniButton>
                        </CheckBlock>
                        <Label>주소</Label>
                        <Input type="text" onChange={(e) => setAddress(e.target.value)}/>
                        <Label>가게 정보</Label>
                        <Input type="text" maxLength={250} onChange={(e) => setInfo(e.target.value)}/>
                        <Label>가게 최대 수용인원</Label>
                        <Input type="number" max={9999} onChange={(e) => setMaxNumber(e.target.valueAsNumber)}/>
                        <MiniButton onClick={() => setSame(true)}>전체설정</MiniButton>
                        <TimePicker day="월" checkBreak={monBreak} startTime={monStartTime} endTime={monEndTime} setBreak={setMonBreak} setEndTime={setMonEndTime} setStartTime={setMonStartTime}/>
                        <TimePicker day="화" checkBreak={tueBreak} startTime={tueStartTime} endTime={tueEndTime} setBreak={setTueBreak} setEndTime={setTueEndTime} setStartTime={setTueStartTime}/>
                        <TimePicker day="수" checkBreak={wedBreak} startTime={wedStartTime} endTime={wedEndTime} setBreak={setWedBreak} setEndTime={setWedEndTime} setStartTime={setWedStartTime}/>
                        <TimePicker day="목" checkBreak={thuBreak} startTime={thuStartTime} endTime={thuEndTime} setBreak={setThuBreak} setEndTime={setThuEndTime} setStartTime={setThuStartTime}/>
                        <TimePicker day="금" checkBreak={friBreak} startTime={friStartTime} endTime={friEndTime} setBreak={setFriBreak} setEndTime={setFriEndTime} setStartTime={setFriStartTime}/>
                        <TimePicker day="토" checkBreak={satBreak} startTime={satStartTime} endTime={satEndTime} setBreak={setSatBreak} setEndTime={setSatEndTime} setStartTime={setSatStartTime}/>
                        <TimePicker day="일" checkBreak={sunBreak} startTime={sunStartTime} endTime={sunEndTime} setBreak={setSunBreak} setEndTime={setSunEndTime} setStartTime={setSunStartTime}/>
                        <MiniButton onClick={HourCheck}>시간확인</MiniButton>
                    </InputBox> 
                    <ButtonBox>
                        <Button type="submit" onClick={SignInPost}>
                            가입하기
                        </Button>
                    </ButtonBox>
                </FormBox>
            </FormBlock>
        )
    }
}

export default SignUpForm;