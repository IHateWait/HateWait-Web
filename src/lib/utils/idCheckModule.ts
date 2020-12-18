import axios from 'axios';

function idCheckModule(id: string, setIdCheck: Function, setIdText: Function){
    console.log('아이디 체크를 시작합니다.');
    
    axios({
        method: 'get',
        url: `https://hatewait-server.herokuapp.com/register/stores/id/${id}`,
    })
    .then((result) => {
        console.log(result);
        setIdCheck('사용 가능한 아이디입니다.');
        setIdText('success');
    })
    .catch(error => {
        console.error(error);
        setIdCheck('이미 존재하는 아이디입니다.');
        setIdText('fail');
    })
    console.log(id);
}

export default idCheckModule;