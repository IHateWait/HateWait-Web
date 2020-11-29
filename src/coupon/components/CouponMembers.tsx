import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../../module';
import axios from 'axios';
import couponImage from '../../static/image/couponImage.png';
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
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: fixed;
    right: 300px;
    margin-top: -24px;
    .coupon{
        width: 24px;
        height: 24px;
        background-image: url(${couponImage});
        background-size: contain;
        background-repeat: no-repeat;
    }
    .checked{
        width: 24px;
        height: 24px;
        background-image: url(${checked});
        background-size: contain;
        background-repeat: no-repeat;
    }
`


function CouponMembers(){
    const log = useSelector((state : RootState)=>state.log);

    const [name0, setName0] = React.useState('');
    const [phone0, setPhone0] = React.useState('');
    const [recent0, setRecent0] = React.useState('');
    const [couponText0, setCouponText0] = React.useState('coupon');
    const [coupon0, setCoupon0] = React.useState(0);
    const [name1, setName1] = React.useState('');
    const [phone1, setPhone1] = React.useState('');
    const [recent1, setRecent1] = React.useState('');
    const [couponText1, setCouponText1] = React.useState('coupon');
    const [coupon1, setCoupon1] = React.useState(0);
    const [name2, setName2] = React.useState('');
    const [phone2, setPhone2] = React.useState('');
    const [recent2, setRecent2] = React.useState('');
    const [couponText2, setCouponText2] = React.useState('coupon');
    const [coupon2, setCoupon2] = React.useState(0);

    React.useEffect(() => {
        axios({
            method: 'get',
            url: `https://hatewait-server.herokuapp.com/stores/${log.user}/members`,
        })
        .then((result) => {
            console.log(result);
            setName0(result.data.members[0].member_name);
            setPhone0(result.data.members[0].member_phone);
            setRecent0(result.data.members[0].recent_visit_time);
            setCoupon0(result.data.members[0].coupon_count);
            setName1(result.data.members[1].member_name);
            setPhone1(result.data.members[1].member_phone);
            setRecent1(result.data.members[1].recent_visit_time);
            setCoupon1(result.data.members[1].coupon_count);
            setName2(result.data.members[2].member_name);
            setPhone2(result.data.members[2].member_phone);
            setRecent2(result.data.members[2].recent_visit_time);
            setCoupon2(result.data.members[2].coupon_count);
            // const ListData = result.data.members.map(() => {
            //     return(
            //         <>
            //         <ListLineBlock>
            //         <TextBlock>{result.data.members.member_name}</TextBlock>
            //         <TextBlock>{result.data.members.member_phone}</TextBlock>
            //         <TextBlock>{result.data.members.recent_visit_time}</TextBlock>
            //         <TextBlock>{result.data.members.coupon_count}</TextBlock>
            //         </ListLineBlock>
            //         <IconBlock>
            //         <div className={coupon} onClick={() => setCoupon('checked')}></div>
            //         </IconBlock>
            //         </>
            //     );
            // })
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    function UseCoupon(name: string, coupon: number ,setCoupon: Function, setCouponText: Function){
        if(coupon !== 0){
            alert(`${name}님의 쿠폰을 1개 사용하였습니다!`);
            setCoupon(coupon-1);

            if(coupon === 1){
                alert("쿠폰을 모두 사용하여 더 이상 사용할 수 없습니다!");
                setCouponText('checked');
            }
        }
        else{
            alert("쿠폰을 모두 사용하여 더 이상 사용할 수 없습니다!");
        }
    }

    return(
        <WaitingListPage>
            <div className="title">쿠폰 보유 유저 목록</div>
            <WaitingListBlock>
                <ListTitleBlock>
                    <TitleBlock>이름</TitleBlock>
                    <TitleBlock>전화번호</TitleBlock>
                    <TitleBlock>최근 방문일자</TitleBlock>
                    <TitleBlock>보유 쿠폰</TitleBlock>
                </ListTitleBlock>
            <ListLineBlock>
            <TextBlock>{name0}</TextBlock>
            <TextBlock>{phone0}</TextBlock>
            <TextBlock>{recent0}</TextBlock>
            <TextBlock>{coupon0}</TextBlock>
            </ListLineBlock>
            <IconBlock>
                <div className={couponText0} onClick={() => UseCoupon(name0, coupon0, setCoupon0, setCouponText0)}></div>
            </IconBlock>
            <ListLineBlock>
            <TextBlock>{name1}</TextBlock>
            <TextBlock>{phone1}</TextBlock>
            <TextBlock>{recent1}</TextBlock>
            <TextBlock>{coupon1}</TextBlock>
            </ListLineBlock>
            <IconBlock>
                <div className={couponText1} onClick={() => UseCoupon(name1, coupon1, setCoupon1, setCouponText1)}></div>
            </IconBlock>
            <ListLineBlock>
            <TextBlock>{name2}</TextBlock>
            <TextBlock>{phone2}</TextBlock>
            <TextBlock>{recent2}</TextBlock>
            <TextBlock>{coupon2}</TextBlock>
            </ListLineBlock>
            <IconBlock>
                <div className={couponText2} onClick={() => UseCoupon(name2, coupon2, setCoupon2, setCouponText2)}></div>
            </IconBlock>
            </WaitingListBlock>
        </WaitingListPage>
    )
}

export default CouponMembers;