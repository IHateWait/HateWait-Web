import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../../module';
import axios from 'axios';

const UserBox = styled.div`
    width: 100%;
    margin-top: 30px;
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const UserText = styled.div`
    font-family: 'GmarketSansMedium';
    .name{
        font-size: 1.5em;
    }
`

function UserInfo(){
    const log = useSelector((state : RootState)=>state.log);
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [info, setInfo] = React.useState('');
    const [hour, setHour] = React.useState('');
    const [capacity, setCapacitiy] = React.useState(0);
    const [address, setAddress] = React.useState('');
    React.useEffect(() => {
        axios({
            method: 'get',
            url: `https://hatewait-server.herokuapp.com/stores/${log.user}`,
        })
        .then((result) => {
            console.log(result);
            setId(log.user);
            setName(result.data.storeInfo.name);
            setPhone(result.data.storeInfo.phone);
            setInfo(result.data.storeInfo.info);
            setHour(result.data.storeInfo.business_hour);
            setCapacitiy(result.data.storeInfo.maximum_capacity);
            setAddress(result.data.storeInfo.address);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);
    
    
    return(
        <UserBox>
            <UserText>
                <div>{log.user}님 반갑습니다!</div>
                <div className="name">
                    {name}
                </div>
                <div>전화 번호: {phone}</div>
                <div>가게 설명: {info}</div>
                <div>운영 시간: {hour}</div>
                <div>수용 인원: {capacity}</div>
                <div>가게 주소: {address}</div>
            </UserText>
        </UserBox>
    );
}

export default UserInfo;