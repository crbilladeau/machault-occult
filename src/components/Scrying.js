import React from 'react';
import styled from 'styled-components';
import capricorn from '../images/Capricornus.png';
import aquarius from '../images/Aquarius.png';
import havi from '../images/havi-DREADWYRMTRANCE.twit-01.jpg';
import goldoval from '../images/goldoval.png';
import crystal from '../images/crystal.png';

const Scrying = () => {
  return (
    <>
      <ScryingHeadline>
        <h2 id="scrying">scrying</h2>
        <img src={capricorn} alt="capricorn constellation" />
        <img src={aquarius} alt="aquarius constellation" />
        <SpellDescription>
          see and hear a particular creature you choose that is on the same plane of existence as you.
        </SpellDescription>
      </ScryingHeadline>
      <AboutSection>
        <About>
          <img src={crystal} alt="crystal" />
          <p>
            Havier Miniti is one of the world’s most infamous wizards. He has co-owned and operated Machault Occult with his dead husband, Tanum Machault, for the last several decades. Do not ask him how old he is.
          </p>
        </About>
          <Portrait>
            <img src={havi} alt="shop owner, Havier Miniti" />
          </Portrait>
             
      </AboutSection>
    </>
  )
}

export default Scrying;

const ScryingHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  /* height: 100vh; */
  h2 {
    font-size: 14rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    margin-left: 9rem;
    margin-top: 3rem;
    z-index: 2;
  }
  img {
    width: 500px;
    z-index: 1;
    position: absolute;
    margin: 0 0.5rem;
    bottom: 120px;
    :nth-child(2) {
      left: 650px;
    }
  }
`;

const SpellDescription = styled.p`
  max-width: 1000px;
  align-self: flex-start;
  margin: 3rem 0 2rem 24rem;
  
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

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
`;  

const About = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 200px;
    margin: 0 6rem 0 0;
  }
  p {
    font-size: 2.2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: black;
    max-width: 700px;
  }
`;

const Portrait = styled.div`
  /* background-image: url(${goldoval});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50%;
  width: 100%;
  height: 100%;
  img {
    width: 500px;
  } */
`;