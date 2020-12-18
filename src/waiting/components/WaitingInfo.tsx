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
                        Waiting Page
                    </div>
                    Waiting은 현재 가게에 오고자 대기하는 손님들의 대기열을 나타내는 공간입니다.<br/>
                    본 공간에서는 손님을 호출하고 삭제할 수 있습니다.<br/>
                    (로그인이 필요한 서비스입니다.)
                </AboutText>
            </AboutContent>
        </AboutPage>
    );
}

export default WaitingInfo;