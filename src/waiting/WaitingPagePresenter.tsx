import React from 'react';
import styled from 'styled-components';
import LogoButton from '../common/LogoButton';
import TopCategoryButtons from '../common/TopCategoryButtons';
import WaitingInfo from './components/WaitingInfo';
import {useSelector} from 'react-redux';
import {RootState} from '../module';
import WaitingList from './components/WaitingList';

const CustomerPage = styled.div`
    max-width: 960px;
    width: 60%;
    padding-top 60px;
    margin: auto;
`

function WaitingPagePresenter(){
    const log = useSelector((state : RootState)=>state.log);
    
    if(log.user === ''){
    return(
        <CustomerPage>
            <LogoButton/>
            <TopCategoryButtons/>
            <WaitingInfo/>
        </CustomerPage>
    );
    }
    else{
        return(
            <CustomerPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <WaitingList/>
            </CustomerPage>
        );
    }
}

export default WaitingPagePresenter;