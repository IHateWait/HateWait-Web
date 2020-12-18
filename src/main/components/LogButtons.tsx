import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const ButtonBox = styled.div`
    @font-face {
        font-family: 'Recipekorea';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    
    .buttonText{
        padding-top: 15px;
        text-align: center;
        text-size: 1.5em;
        font-family: 'Recipekorea';
        width: 100%;
    }
`

const Button = styled.div`
    width: 200px;
    height: 50px;
    background-color: #66BB6A;
    color: #fff;
    border-radius: 10px;
    border: #66BB6A 2px solid;
    &:hover{
        color: #66BB6A;
        background-color: #fff;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function LogButtons() {
    return(
        <ButtonBox>
            <StyledLink to="/signin">
                <Button>
                    <div className="buttonText">가게 로그인</div>
                </Button>
            </StyledLink>
            <StyledLink  to="/signup">
                <Button>
                    <div className="buttonText">가게 회원가입</div>
                </Button>
            </StyledLink>
        </ButtonBox>
    );
}

export default LogButtons;