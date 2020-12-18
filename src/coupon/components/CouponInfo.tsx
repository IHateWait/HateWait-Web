import React from 'react';
import styled from 'styled-components';

const AboutPage = styled.div`
    max-width: 960px;
    width: 100%;
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

function WaitingInfo(){
    return(
        <AboutPage>
            <AboutContent>
                <AboutText>
                    <div className="title">
                        Coupon Page
                    </div>
                    Coupon은 가게를 방문한 손님들 중 쿠폰이 있는 사용자들을 보여주는 공간입니다.<br/>
                    본 공간에서 가게는 사용자의 쿠폰 사용을 제어할 수 있습니다.<br/>
                    (로그인이 필요한 서비스입니다.)
                </AboutText>
            </AboutContent>
        </AboutPage>
    );
}

export default WaitingInfo;