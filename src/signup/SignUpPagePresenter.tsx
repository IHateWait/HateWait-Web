import React from 'react';
import styled from 'styled-components';
import SignUpForm from './conponents/SignUpForm';
import LogoButton from '../common/LogoButton';

const SignUpPage = styled.div`
    max-width: 960px;
    width: 60%;
    margin: auto;
`

function SignUpPagePresenter(){
    return(
        <SignUpPage>
            <LogoButton/>
            <SignUpForm/>
        </SignUpPage>
    );
}

export default SignUpPagePresenter;
