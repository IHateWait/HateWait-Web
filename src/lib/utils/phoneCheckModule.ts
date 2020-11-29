import axios from 'axios';

function phoneCheckModule(number: string, setNumberCheck: Function, setNumberText: Function){
    axios({
        method: 'get',
        url: `https://hatewait-server.herokuapp.com/register/stores/phone/${number}`,
    })
    .then((result) => {
        console.log(result);
        setNumberCheck('사용 가능한 번호입니다.');
        setNumberText('success');
    })
    .catch(error => {
        console.error(error);
        setNumberCheck('이미 존재하는 번호입니다.');
        setNumberText('fail');
    })
    console.log(number);
}

export default phoneCheckModule;