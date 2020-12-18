import React from 'react';
import styled from 'styled-components';
import LogoButton from '../common/LogoButton';
import LogButtons from './components/LogButtons';
import TopCategoryButtons from '../common/TopCategoryButtons';
import UserInfo from './components/UserInfo';
import {useSelector} from 'react-redux';
import {RootState} from '../module';

const MainPage = styled.div`
    max-width: 960px;
    width: 60%;
    padding-top 60px;
    margin: auto;
`

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
        text-align: center;
        text-size: 1.5em;
        font-family: 'Recipekorea';
        width: 100%;
    }
    .buttonText:hover{
        color: #000;
    }
`



function MainPagePresenter(){
    const log = useSelector((state : RootState)=>state.log);

    if(log.user === ''){
        return(
            <MainPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <LogButtons/>
            </MainPage>
        );
    }
    else{
        return(
            <MainPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <UserInfo/>
            </MainPage>
        );
    }
    
}

export default MainPagePresenter;