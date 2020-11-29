import React from 'react';
import styled from 'styled-components';
import TopCategoryButtons from '../common/TopCategoryButtons';
import LogoButton from '../common/LogoButton';

const AboutPage = styled.div`
    max-width: 960px;
    width: 60%;
    padding-top 60px;
    margin: auto;
`

const AboutContent = styled.div`
    margin-top: 50px;
    width: 60%;
    margin: auto;
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const AboutText = styled.div`
    font-family: 'GmarketSansMedium';
    font-size: 1em;
    color: #5D5D5D;
    margin-top: 30px;
    .title{
        font-size: 1.5em;
        text-align: left;
        margin-bottom: 30px;
        color: #000;
    }
`

function AboutPresenter(){
    return(
        <AboutPage>
            <LogoButton/>
            <TopCategoryButtons/>
            <AboutContent>
                <AboutText>
                    <div className="title">
                        Hate-Wait
                    </div>
                    Hate-Wait은 대기로 인해 공간이 혼잡해지는 것을 보완하고자 만들어진 서비스입니다.
                </AboutText>
            </AboutContent>
        </AboutPage>
    );
}

export default AboutPresenter;