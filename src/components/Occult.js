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
          2. beyond the range of ordinary knowledge or understanding; mysterious.
          <br />
          3. secret; disclosed or communicated only to the initiated.
        </SpellDescription>      
        {/* <Dust src={dust} alt="sparkles" /> */}
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
  position: relative;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
  h2 {
    font-size: 10vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    margin-right: 24rem;
    z-index: 2;
    @media screen and (max-width: 1200px) {
      font-size: 14vw;
      margin-left: 4rem;
      margin-right: 0;
    }
    @media screen and (max-width: 600px) {
      font-size: 16vw;
      margin-left: 1rem;
      margin-right: 0;
      align-self: flex-start;
    }
  }
  span {
    font-size: 2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #FFCA3A;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    margin-left: 3rem;
    z-index: 2;  
    @media screen and (max-width: 850px) {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
  }

`;

const SpellDescription = styled.p`
  max-width: 1000px;
  margin: 2rem 4rem;
  
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
  color: white;
  line-height: 3rem;
  z-index: 2;
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: right;
    margin: 2rem 2rem 0 6rem;
    max-width: 800px;
  }
  @media screen and (max-width: 600px) {
      font-size: 1rem;
      line-height: 1.4rem;
      margin: 2rem 3rem 0 3rem;
      text-align: left;
    }
  @media screen and (max-width: 420px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
    margin: 2rem 2rem 0 2rem;
    text-align: left;
  }
`;

const Dust = styled.img`
  position: absolute;
  width: 50%;
  top: -200px;
  margin-top: 20rem;
  z-index: 1;
  transform: rotate(-90deg);
  @media screen and (max-width: 850px) {
    width: 100%;
    top: 60px;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    top: 800px;
  }
  @media screen and (max-width: 382px) {
    width: 100%;
    top: 1000px;
    
  }
`;

const OccultImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 6rem auto;
  width: 75%;
  img {
    width: 200px;
    margin: 1rem;
    :nth-child(3) {
      width: 300px;
    }
    :nth-child(4) {
      width: 180px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 4rem auto;
  }
`;

const Hands = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 8rem auto 0 auto;
   @media screen and (max-width: 1200px) {
      margin: 0 auto;
  }
  img {
    width: 350px;
    margin: 0 6rem;

    :nth-child(1) {
      transform: rotate(90deg);
    }
    :nth-child(2) {
      transform: scaleX(-1) rotate(90deg);
    @media screen and (max-width: 1024px) {
      display: none;
      }  
    }
    @media screen and (max-width: 420px) {
      width: 260px;
    }
  }
`;