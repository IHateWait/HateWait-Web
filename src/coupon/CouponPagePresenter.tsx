import React from 'react';
import styled from 'styled-components';
import LogoButton from '../common/LogoButton';
import TopCategoryButtons from '../common/TopCategoryButtons';
import CouponInfo from './components/CouponInfo';
import {useSelector} from 'react-redux';
import {RootState} from '../module';
import CouponMembers from './components/CouponMembers';

const CouponPage = styled.div`
    max-width: 960px;
    width: 60%;
    padding-top 60px;
    margin: auto;
`

function CouponPagePresenter(){
    const log = useSelector((state : RootState)=>state.log);
    
    if(log.user === ''){
        return(
            <CouponPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <CouponInfo/>
            </CouponPage>
        );
    }
    else{
        return(
            <CouponPage>
                <LogoButton/>
                <TopCategoryButtons/>
                <CouponMembers/>
            </CouponPage>
        );
    }
}

export default CouponPagePresenter;