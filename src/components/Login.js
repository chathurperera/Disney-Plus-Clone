import React from 'react';
import styled from 'styled-components';
const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem hello helooLorem hello heloo Lorem hello heloo Lorem hello heloo
                    Lorem hello heloo Lorem hello heloo Lorem hello heloo Lorem hello heloo
                    Lorem hello heloo Lorem hello heloo Lorem hello heloo Lorem hello heloo
                </Description>
                <CTALogoTwo src='/images/cta-logo-two.png' />                
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div `
    position:realtive;
    height:calc(100vh - 70px);
    display:flex;
    align-items: top;
    justify-content:center;
    
    &::before{
    background-position:top;
    background-size: cover;
    background: url("/images/login-background.jpg") no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
    }
    `

const CTA = styled.div`
width:90%;
max-width:650px;
padding:80px 40px;
display:flex;
flex-direction: column;
align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.button`
    cursor:pointer;
    width: 100%;
    background-color: #0063e5;
    font-weight:bold;
    border: none;
    color:#f9f9f9;
    padding:17px 0;
    border-radius:4px;
    font-size:18px;
    transition: all .25s ;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background-color:#0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`