import React from 'react';
import styled from 'styled-components';
import SignUpForm from './conponents/SignUpForm';
import LogoButton from '../common/LogoButton';

const SignUpPage = styled.div`
    max-width: 960px;
    width: 60%;
    margin: auto;
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const SignUpText = styled.div`
    width: 100%;
    font-family: 'GmarketSansMedium';
    font-size: 1.5em;
    text-align: center;
    .subText{
        font-size: 1em;
        text-align: left;
    }
`

function SignUpSuccessPresenter(){
    return(
        <SignUpPage>
            <LogoButton/>
            <SignUpText>
                회원가입이 완료되었습니다!
                <div className="subText">로고 버튼을 통해 홈에서 로그인을 진행해주세요.</div>
            </SignUpText>
        </SignUpPage>
    );
}

export default SignUpSuccessPresenter;
