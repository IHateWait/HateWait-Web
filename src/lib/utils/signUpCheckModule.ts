import React from 'react';
import axios from 'axios';

function signUpCheckModule(
    businessHour: string,
    id: string,
    password: string,
    number: string,
    name: string,
    email: string,
    hour: string,
    capacity: number,
    address: string,
    info: string,
    idCheck: string,
    pwCheck: string,
    numberCheck: string,
    emailCheck: string,
    )
    {
    if(businessHour === '' || id !== "success" || password !=="success" || number !== "success" || !name || email !=="success" || !hour || !capacity || !address)
    {
        alert("아직 작성하지 않거나 형식이 올바르지 않은 부분이 존재합니다!");
    }
    else{
        axios({
            method: 'post',
            url: 'https://hatewait-server.herokuapp.com/register/store',
            headers: { 'content-type': 'application/json' },
            data: {
              id: idCheck,
              name: name,
              pw: pwCheck,
              phone: numberCheck,
              email: emailCheck,
              info: info,
              business_hour: businessHour,
              maximum_capacity: capacity,
              address: address
            }
        })
        .then((result) => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        })
        console.log(id);
    }
}

export default signUpCheckModule;