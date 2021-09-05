import React , {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import db from "../firebase";

const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState('');
    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                setMovie(doc.data());
            }else{

            }
        })        
    },[id])
console.log(movie);
    return (
            <Container>
                <Background>
                    <img src={movie.backgroundImg} />
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} alt='movie logo' />
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
                    {movie.subTitle}
                </Subtitle>
                <Description>
                   {movie.description}
                </Description>
            </Container>
    );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 3rem calc(3.5vw + 10px);
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
  min-height: 150px;
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

const Description = styled.p`
    line-height:1.2;
    font-size:19px;
    margin-top:16px;
    color:rgb(249,249,249);
    width:800px;
    max-width:600px;

`