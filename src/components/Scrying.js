import React from 'react';
import styled from 'styled-components';
import capricorn from '../images/Capricornus.png';
import aquarius from '../images/Aquarius.png';
import portrait from '../images/portrait.png';
import crystal from '../images/crystal.png';
const Scrying = () => {
  return (
    <ScryingContainer>        
      <Constellation src={aquarius} alt="aquarius constellation" /> 
      <Constellation src={capricorn} alt="capricorn constellation" />
      <ScryingHeadline>
        <h1 id="scrying">scrying</h1>

        <SpellDescription>
          see and hear a particular creature you choose that is on the same plane of existence as you.
        </SpellDescription>
        <About>
          <img src={crystal} alt="crystal" />
          <p>
            Havier Miniti is one of the world’s most venerable wizards. He has co-owned and operated Machault Occult with his late husband, Tanum Machault, for the last several decades. Do not ask him how old he is.
          </p>       
        </About>
      </ScryingHeadline>
      <Portrait>
        <img src={portrait} alt="shop owner, Havier Miniti" />
      </Portrait>
    </ScryingContainer>
  )
}

export default Scrying;

const ScryingContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const ScryingHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 2;
  margin-top: 20rem;
  @media screen and (max-width: 768px) {
    margin-top: 10rem;
    align-items: center;
  }
  @media screen and (max-width: 420px) {
    margin-top: 4rem;
  }

  h1 {
    font-size: 12vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    margin-left: 9vw;
    align-self: flex-start;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
    z-index: 2;

    @media screen and (max-width: 768px) {
      font-size: 20vw;
      margin-left: 2rem;
    }
  }
`;

const Constellation = styled.img`
  width: 20%;
  z-index: 1;
  position: absolute;
  margin: 20rem 0.5rem 0 0.5rem;
  top: 0px;

  :nth-child(2) {
    left: 30vw;
    @media screen and (max-width: 768px) {
      left: 50vw;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 10rem;
    width: 40%;
  }
  @media screen and (max-width: 420px) {
    margin-top: 4rem;
  }
`;

const SpellDescription = styled.p`
  align-self: flex-end;
  margin: 4rem 2rem;
  max-width: 30vw;
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  text-align: right;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
  color: white;
  line-height: 2vw;
  z-index: 2;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4rem;
    max-width: 75vw;
    align-self: flex-start;
    text-align: left;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8rem 6vw 2rem 4vw;
  @media screen and (max-width: 768px) {
    margin: 2rem auto 6rem auto;
    max-width: 65vw;
  }
  @media screen and (max-width: 600px) {
    max-width: 80vw;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    max-width: 100%;
    margin: 0rem 1rem 6rem 1rem;
  }
  img {
    width: 8%;
    margin: 0 2rem 0 0;
    @media screen and (max-width: 420px) {
      width: 20%;
      margin: 0 0 2rem 0;
    }
  }
  p {
    font-size: 2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4rem;
      color: white;
    }
    @media screen and (max-width: 420px) {
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: center;
    }
  }
`;

const Portrait = styled.div`
  margin-top: 20rem;
  z-index: 3;
  
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  img {
    width: 90%;  
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
    }
  }
`;