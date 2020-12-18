import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {logIn} from '../../module/login/actions';
import {RootState} from '../../module';
import { useHistory } from 'react-router-dom';

const LoginFormBlock = styled.div`
    @font-face {
        font-family: 'Recipekorea';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    width: 53%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 100px;
    background-color: #F5F5F5;
`

const ButtonBox = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 30px;
`

const Button = styled.button
`
    background-color: #66BB6A;
    color: #fff;
    width: 280px;
    height: 50px;
    font-size: 1.5em;
    border-radius: 10px;
    outline: 2px #000;
    margin: auto;
    font-family: 'Recipekorea';
    &:hover{
        background-color: #fff;
        color: #66BB6A;
        border: 2px solid;
        border-color: #66BB6A;
    }
`

const LabelTextBox = styled.div`
    @font-face {
        font-family: 'LotteMartDream';
        font-style: normal;
        font-weight: 400;
        src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff') format('woff');
    }
    height: 16px;
    font-family: 'LotteMartDream';
    font-size: 1.2em;
    margin-left: 15px;
    margin-bottom: 5px;
`

const TextStyle = {
    fontSize: "1.2em",
    marginLeft: "15px",
}

const Input = styled.input`
    width: 90%;
    height: 30px;
    margin-bottom: 20px;
    margin-left: 15px;
`

function LoginForm(){
    const dispatch = useDispatch();
    const login = React.useCallback((user : string) => (
        dispatch(logIn({ user : user}))
    ), [dispatch]);
    
    const history = useHistory();

    const [id, setId] = React.useState('');
    const [password, setPassword] = React.useState('');

    const IdChange = (e: any) =>{
        e.preventDefault();
        setId(e.target.value);
        console.log(e.target.value);
        console.log(id);
    }

    const PasswordChange = (e: any) =>{
        e.preventDefault();
        setPassword(e.target.value);
        console.log(e.target.value);
        console.log(password);
    }

    function SignInPost(){
        axios({
            method: 'post',
            url: 'https://hatewait-server.herokuapp.com/login/stores/test',
            headers: { 'content-type': 'application/json' },
            data: {
              id: id,
              pw: password
            }
        })
        .then((result) => {
            console.log(result);
            if(result.status === 200){
                login(id);
                history.push(`/`);
            }
        })
        .catch(error => {
            console.error(error);
            alert("아이디 혹은 패스워드가 올바르지 않습니다!");
        })
        console.log(id, password);
    }
    return(
        <LoginFormBlock>
            <LabelTextBox>아이디</LabelTextBox>
            <Input id="id" type="text" onChange={IdChange}/>
            <br/>
            <LabelTextBox>비밀번호</LabelTextBox>
            <Input id="password" type="password" onChange={PasswordChange}/>
            <ButtonBox>
                <Button type="submit" onClick={SignInPost}>로그인</Button>
            </ButtonBox>
        </LoginFormBlock>
    )
}

export default LoginForm;