import React from 'react';
import styled from 'styled-components';
import locateobject from '../images/locate-object.png';
import hourglass from '../images/hourglass.jpg';
import cosmos from '../images/cosmos.png';
import Teleport from './Teleport';

const LocateObject = () => {
  return (
    <LocateContainer>
      <Cosmos id="locate-object" src={cosmos} alt="cosmos" />
      <HeadlinesBox>
        <h1>locate object</h1>
        <SpellDescription>
          <p>locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.</p>
        </SpellDescription>
      </HeadlinesBox>
      <MiddleRow>
        <ImageBox>
          <img src={hourglass} alt="hourglass" />
        </ImageBox>
        <Disclaimer>
          <p>Our selection of mythical objects, alchemical liquids, and magical and non-magical tomes is unlike any other in the world.**</p>
          <p>** Machault Occult and its owner(s) are not responsible or liable for any injuries, lost limbs or appendages, additional clones, demons summoned, confessions of love, unwanted body swaps, accidental & painful deaths - irreversible or otherwise - sustained before or after purchase from our inventory. NO RETURNS - ALL SALES ARE FINAL!</p>
        </Disclaimer>
      </MiddleRow>
  
      {/* <Teleport /> */}
    </LocateContainer>
  )
}

export default LocateObject;

const LocateContainer = styled.div`
  background-image: url(${locateobject});
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 1200px) {
 
  }
  /* @media screen and (max-width: 768px) {
    margin-top: 60rem;
  } */
`;

const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10rem;
  /* margin: 0 1rem 2rem 1rem; */
  
  h1 {
    font-size: 12vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    text-align: right;
    color: black;
    margin: 14rem 4rem 0 0;
    z-index: 1;
    @media screen and (max-width: 600px) {
      margin: 16rem 0 0 0;
      font-size: 20vw;
    }
  }
`;

const Cosmos = styled.img`
  width: 60%;
  margin-left: -14rem;
  position: absolute;
  top: 400px;
  left: 250px;
  transform: rotate(180deg) scaleX(-1);

  @media screen and (max-width: 1600px) {
    top: 300px;
    left: 60px;
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
    left: 100px;
  }
  /* @media screen and (max-width: 600px) {
    width: 85%;
    top: 700px;
    left: 248px;
    transform: rotate(85deg);
  } */
`;

const SpellDescription = styled.div`
  align-self: flex-end;
  max-width: 48vw;    
  z-index: 1;
  @media screen and (max-width: 600px) {
    max-width: 100%;
    align-self: flex-start;
  }
  p {
    font-size: 1.8vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    text-align: right;
    /* text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50); */
    color: black;
    line-height: 2vw;
    margin: 2vw 4vw 4vw 0;

  @media screen and (max-width: 1024px) {
    margin: 4vw 4vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: left;
    margin: 4rem 2rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: left;
    margin: 4rem 1rem;
  }
}
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20rem;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    margin-top: 0%;
  }
  
  p {
    color: white;
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    text-align: right;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    line-height: 2.4vw;
    max-width: 60vw;
    margin: 0 6rem;

    @media screen and (max-width: 600px) {
      text-align: center;
      margin: 10rem 1rem 0 1rem;
      font-size: 6vw;
      line-height: 7vw;
      max-width: 100%;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  img {
    width: 80%;
    margin: 0 4rem 10rem 4rem;
  }
`;

export const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10rem;
  width: 100%;
  height: 100%;

  p:nth-child(2) {
    color: white;
    font-size: 0.8rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 1.2rem;
    max-width: 30vw;
    margin-top: 8rem;
    text-align: left;
    @media screen and (max-width: 1024px) {
      max-width: 100%;
      margin: 4rem 1rem;
    }
  }
`;

