import React from 'react';
import styled from 'styled-components';
import cup from '../images/cup.png';
import crystalball from '../images/crystalball.png';
import crown from '../images/crown.png';
import poison from '../images/poison.png';
import hand from '../images/hand.png';
import dust from '../images/dust.png';

const Occult = () => {
  return (
    <>
      <OccultHeadline><h2>occult<span>[ uh-kuhlt, ok-uhlt ]</span></h2>
        <SpellDescription>
          1. of or relating to magic, astrology, or any system claiming use or knowledge of secret or supernatural powers or agencies.
          <br />
          <br />
          2. beyond the range of ordinary knowledge or understanding; mysterious.
          <br />
          <br />
          3. secret; disclosed or communicated only to the initiated.
        </SpellDescription>      
        <Dust src={dust} alt="sparkles" />
      </OccultHeadline>

      <OccultImages>
        <img src={cup} alt='goblet' />
        <img src={crystalball} alt='crystal ball' />
        <img src={crown} alt='crown' />
        <img src={poison} alt='poison' />
      </OccultImages>
      <Hands>
        <img src={hand} alt="hand" />
        <img src={hand} alt="hand" />
      </Hands>
    </>
  )
}

export default Occult;

const OccultHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10rem;
  width: 100%;
  height: 100vh;
  position: relative;
  h2 {
  font-size: 10rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  color: white;
  margin-right: 24rem;
  z-index: 2;
  }
  span {
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #FFCA3A;
    margin-left: 4rem;
    z-index: 2;
  }
`;

const SpellDescription = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 2rem 4rem;
  
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  text-shadow:
        0.05em 0 black,
        0 0.05em black,
        -0.05em 0 black,
        0 -0.05em black,
        -0.05em -0.05em black,
        -0.05em 0.05em black,
        0.05em -0.05em black,
        0.05em 0.05em black;
  color: white;
  line-height: 2.2rem;
  z-index: 2;
`;

const Dust = styled.img`
  position: absolute;
  width: 1100px;
  top: 400px;
  margin-top: 20rem;
  z-index: 1;
  transform: rotate(-90deg);
  /* @media screen and (max-width: 1800px) {
    width: 800px;
  } */
`;

const OccultImages = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
  img {
    width: 260px;
    margin: 0 6rem;
    :nth-child(3) {
      width: 320px;
    }
    :nth-child(4) {
      width: 240px;
    }
  }
`;

const Hands = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
  img {
    width: 480px;
    margin: 0 6rem;    
    :nth-child(1) {
      transform: rotate(90deg);
    }
    :nth-child(2) {
      transform: scaleX(-1) rotate(90deg);
    }  
  }
`;