import React from 'react';
import styled from 'styled-components';
import waiting from '../testdata/waiting.json';
import bell from '../../static/image/bell.png';
import checked from '../../static/image/checked.png';

const WaitingListPage = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 30px;
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .title{
        font-family: 'GmarketSansMedium';
        font-size: 1.5em;
    }
`

const WaitingListBlock = styled.div`
    width: 100%;
    border: 2px #000 solid
`

const ListLineBlock = styled.div`
    width: 90%;
    border-bottom: 2px #bfbfbf solid;
    margin: auto;
    display: flex;
    justify-content: space-between;
    border-left: 1px #bfbfbf solid;
`

const ListTitleBlock = styled.div`
    width: 90%;
    border-bottom: 2px #000 solid;
    margin: auto;
    display: flex;
    justify-content: space-between;
    border-left: 1px #000 solid;
`

const TextBlock = styled.div`
    width: 20%;
    font-family: 'GmarketSansMedium';
    border-right: 1px #bfbfbf solid;
    text-align: center;
`

const TitleBlock = styled.div`
    width: 20%;
    font-family: 'GmarketSansMedium';
    border-right: 1px #000 solid;
    text-align: center;
    font-size: 1.2em;
`

const IconBlock = styled.div`
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: fixed;
    right: 300px;
    margin-top: -20px;
    .bell{
        width: 16px;
        height: 16px;
        background-image: url(${bell});
        background-size: contain;
        background-repeat: no-repeat;
    }
    .checked{
        width: 16px;
        height: 16px;
        background-image: url(${checked});
        background-size: contain;
        background-repeat: no-repeat;
    }
`

function WaitingList(){
    const [check0, setCheck0] = React.useState('bell');
    const [check1, setCheck1] = React.useState('bell');
    const [check2, setCheck2] = React.useState('bell');
    const [check3, setCheck3] = React.useState('bell');

    function check(name: string, setCheck: Function) {
        alert(`${name}님이 호출되었습니다!`);
        setCheck('checked');
    }
    // const waitingData = waiting.map((waiting, i) => {
    //     return(
    //         <>
    //         <ListLineBlock>
    //         <TextBlock>{waiting.phone}</TextBlock>
    //         <TextBlock>{waiting.name}</TextBlock>
    //         <TextBlock>{waiting.people_number}</TextBlock>
    //         <TextBlock>{waiting.called_time}</TextBlock>
    //         </ListLineBlock>
    //         <IconBlock>
    //         <div className={} onClick={() => setCheck0('checked')}></div>
    //         </IconBlock>
    //         </>
    //     );
    // })

    return(
        <WaitingListPage>
            <div className="title">대기 목록</div>
            <WaitingListBlock>
                <ListTitleBlock>
                    <TitleBlock>전화번호</TitleBlock>
                    <TitleBlock>이름</TitleBlock>
                    <TitleBlock>인원</TitleBlock>
                    <TitleBlock>호출 시간</TitleBlock>
                </ListTitleBlock>
                <ListLineBlock>
                    <TextBlock>{waiting[0].phone}</TextBlock>
                    <TextBlock>{waiting[0].name}</TextBlock>
                    <TextBlock>{waiting[0].people_number}</TextBlock>
                    <TextBlock>{waiting[0].called_time}</TextBlock>
                </ListLineBlock>
                    <IconBlock>
                    <div className={check0} onClick={() => check(waiting[0].name, setCheck0)}></div>
                    </IconBlock>
                <ListLineBlock>
                    <TextBlock>{waiting[1].phone}</TextBlock>
                    <TextBlock>{waiting[1].name}</TextBlock>
                    <TextBlock>{waiting[1].people_number}</TextBlock>
                    <TextBlock>{waiting[1].called_time}</TextBlock>
                </ListLineBlock>
                    <IconBlock>
                    <div className={check1} onClick={() => check(waiting[1].name, setCheck1)}></div>
                    </IconBlock>
                    <ListLineBlock>
                    <TextBlock>{waiting[2].phone}</TextBlock>
                    <TextBlock>{waiting[2].name}</TextBlock>
                    <TextBlock>{waiting[2].people_number}</TextBlock>
                    <TextBlock>{waiting[2].called_time}</TextBlock>
                    </ListLineBlock>
                    <IconBlock>
                    <div className={check2} onClick={() => check(waiting[2].name, setCheck2)}></div>
                    </IconBlock>
                    <ListLineBlock>
                    <TextBlock>{waiting[3].phone}</TextBlock>
                    <TextBlock>{waiting[3].name}</TextBlock>
                    <TextBlock>{waiting[3].people_number}</TextBlock>
                    <TextBlock>{waiting[3].called_time}</TextBlock>
                    </ListLineBlock>
                    <IconBlock>
                    <div className={check3} onClick={() => check(waiting[3].name, setCheck3)}></div>
                    </IconBlock>
            </WaitingListBlock>
        </WaitingListPage>
    );
}

export default WaitingList;