import React from 'react';
import styled from 'styled-components';

const AboutPage = styled.div`
    max-width: 960px;
    width: 100%;
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

function GraphInfo(){
    return(
        <AboutPage>
            <AboutContent>
                <AboutText>
                    <div className="title">
                        고객 통계 페이지
                    </div>
                    Hate-Wait은 대기열을 통해 가게에 방문한 손님들의 로그를 통해 가게에 도움이 되는 데이터를 제공합니다.<br/>
                </AboutText>
            </AboutContent>
        </AboutPage>
    );
}

export default GraphInfo;