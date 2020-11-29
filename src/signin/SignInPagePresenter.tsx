import React from 'react';
import styled from 'styled-components';
import LogoButton from '../common/LogoButton';
import LoginForm from './components/LoginForm';

const FormBlock = styled.div`
    max-width: 680px;
    margin: auto;
    width: 70%;
    flex-direction: column;
    text-align: left;
`


function SignUpTest(){
    return(
        <FormBlock>
            <LogoButton/>
            <LoginForm/>
        </FormBlock>
    );
}

export default SignUpTest;