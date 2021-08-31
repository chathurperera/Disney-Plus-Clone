import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesTOShow: 1,
        slidesTOScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="slider Image" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="slider Image" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="slider Image" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider


const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before{
            font-size:10px;
            color: rgba(255, 255, 255, 0.699);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration:300ms;
        &:hover{

            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`