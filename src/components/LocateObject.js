import React from 'react';
import styled from 'styled-components';
import locateobject from '../images/locate-object.png';
import hourglass from '../images/hourglass.jpg';
import cosmos from '../images/cosmos.png';
import Teleport from './Teleport';

const LocateObject = () => {
  return (
    <LocateContainer>
      <Cosmos src={cosmos} alt="cosmos" />
      <HeadlinesBox>
        <h1 id="locate-object">locate object</h1>
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
  
      <Teleport />
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
  @media screen and (max-width: 768px) {
    margin-top: -10rem;
    justify-content: center;
    align-items: center;
  }
`;

const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 420px) {
    margin: 0;
  }
  h1 {
    font-size: 12vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    text-align: right;
    color: black;
    margin: 8rem 4rem 0 0;
    z-index: 1;
    @media screen and (max-width: 768px) {
      font-size: 20vw;
      text-shadow: 3px 3px 0px rgba(255,255,255, 1);
      margin: 10rem 2rem 0 0;
    }

  }
`;

const Cosmos = styled.img`
  width: 60%;
  margin-left: -14rem;
  position: absolute;
  top: 100px;
  left: 250px;
  transform: rotate(180deg) scaleX(-1);
  @media screen and (max-width: 768px) {
    top: 500px;
  }
`;

const SpellDescription = styled.div`
  align-self: flex-end;
  max-width: 48vw;    
  z-index: 1;
  margin: 3rem 4rem;
  @media screen and (max-width: 768px) {
    margin: 2rem 2rem 0 4rem;
    align-self: flex-start;
    max-width: 75vw;
  }
  @media screen and (max-width: 700px) {
    margin: 1rem 1rem 0 1rem;
  }
  
  p {
    font-size: 1.8vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    text-align: right;
    color: black;
    line-height: 2vw;
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: right;
  }
  @media screen and (max-width: 850px) {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: right;
  }  
  @media screen and (max-width: 768px) {
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: left;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
}
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 800px;
  margin-top: 10rem;
  margin-bottom: 8rem;
  z-index: 1;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 4rem 0;
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
    @media screen and (max-width: 1024px) {
      margin: 0 4rem;
    }
    @media screen and (max-width: 768px) {
      margin: 2rem;
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.8rem;
      max-width: 75vw;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
      max-width: 100%;
    }
  }
`;

const ImageBox = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
  img {
    width: 80%;
    margin: 0 4rem 0 4rem;
    @media screen and (max-width: 768px) {
      margin: 10rem auto 0 auto;
    }
  }
`;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }
  p:nth-child(2) {
    color: white;
    font-size: 0.8rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 1.2rem;
    max-width: 50vw;
    margin-top: 4rem;
    text-align: left;
    @media screen and (max-width: 1024px) {
      max-width: 100%;
      margin: 4rem 1rem;
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
      margin: 1rem 2rem;
    }
    @media screen and (max-width: 420px) {
      margin: 1rem;
    }
  }
`;

