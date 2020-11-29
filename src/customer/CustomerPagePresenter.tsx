import React from 'react';
import styled from 'styled-components';
import LogoButton from '../common/LogoButton';
import StaticGraph from './components/StaticGraph';
import TopCategoryButtons from '../common/TopCategoryButtons';
import GraphInfo from './components/GraphInfo';
import {useSelector} from 'react-redux';
import {RootState} from '../module';

const CustomerPage = styled.div`
    max-width: 960px;
    width: 60%;
    padding-top 60px;
    margin: auto;
`

function SignInPagePresenter(){
    const log = useSelector((state : RootState)=>state.log);
    
    if(log.user === ''){
        return(
            <CustomerPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <GraphInfo/>
            </CustomerPage>
        );
    }

    else{
        return(
            <CustomerPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <StaticGraph/>
            </CustomerPage>
        );
    }
}

export default SignInPagePresenter;