import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonBoxGroup = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    @font-face {
        font-family: 'silgothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/silgothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const Button = styled.div`
    {
        color: #000;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15em;
        
        display: inline-block;
        padding: 15px 20px;
        position: relative;
        cursor: pointer;
    }
    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #000;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover:after { 
        width: 100%; 
        left: 0; 
    }
`

function TopCategoryButtons() {
    return (
        <ButtonBoxGroup>
            <Link to="/about">
                <Button>
                    ABOUT
                </Button>
            </Link>
            <Link to="/customer">
                <Button>
                    CUSTOMER
                </Button>
            </Link>
            <Link to="/waiting">
                <Button>
                    WAITING
                </Button>
            </Link>
            <Link to="/coupon">
                <Button>
                    COUPON
                </Button>
            </Link>
        </ButtonBoxGroup>
    )
}

export default TopCategoryButtons;