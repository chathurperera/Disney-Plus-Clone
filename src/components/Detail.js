import React from "react";
import styled from "styled-components";
const Detail = () => {
    return (
        <div>
            <Container>
                <Background>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
                </Background>
                <ImageTitle>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt='movie logo' />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="play-icon" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="play-icon" />
                        <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupButton>
                        <img src='/images/group-icon.png' alt='' />
                    </GroupButton>
                </Controls>
                <Subtitle>
                    2018 + 7m + Family , Fatansy , Kids , Animation
                </Subtitle>
                <Description>
                    lorem dannfeuhaniueofahkdnzso ooniwnqknoishbcisakcxnosa dnqwiuhakSXKASNLA  
                    ONIONL;HUOH;ONxiuno;ou;hoNDMMLCOKnhtojlndkhvhwenmn.daahgeBNMVBLIFOhkbf,vnahdsmnvkjscjAn
                    vkHjfeLFIidgC;argefn,nsvkPhhavefm;bck;hfwjbmfnlJ
                </Description>
            </Container>
        </div>
    );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 5rem calc(3.5vw + 10px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity:0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 34vw;
  min-width: 200px;

  img {
    height: 100%;
    object-fit: contain;
}
`;


const Controls = styled.div`
    display:flex;
    align-items:center;
    
    `
const PlayButton = styled.button`
        border-radius: 4px;
        font-size:15px;
        padding: 0px 24px;
        margin-right: 22px;
        display: flex;
        background-color: rgb(249 249 249);
        align-items: center;
        height: 40px;
        border: none;
        letter-spacing: 1.8px;
        cursor: pointer;
        
        
        &:hover{
            background-color: rgb(198,198,198);
        }
    `
const TrailerButton = styled(PlayButton)`
        background:rgba(0,0,0,0.3);
        border:1px solid rgba(249 249 249);
        text-transform:uppercase;
`
const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid #fff;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    
    span{
        font-size:30px;
        color:#fff;
    }
    `
const GroupButton = styled(AddButton)`
    background-color:#000;
`

const Subtitle = styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;

`

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);

`