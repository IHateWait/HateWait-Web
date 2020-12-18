import React from 'react';
import styled from 'styled-components';
import LogoImage from '../static/image/LogoImage.png';
import {Link} from 'react-router-dom';

const HeaderImage = styled.div`
    background-image: url(${LogoImage});
    background-size: contain;
    background-repeat: no-repeat;
    width: 400px;
    height: 180px;
    margin: auto;
    margin-bottom: 40px;
    cursor: pointer;
`



function Logo(){
    return(
        <Link to="/">
            <HeaderImage/>
        </Link>

    )
}

export default Logo;