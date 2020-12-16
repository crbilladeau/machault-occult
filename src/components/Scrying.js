import React from 'react';
import styled from 'styled-components';
import capricorn from '../images/Capricornus.png';
import aquarius from '../images/Aquarius.png';
import havi from '../images/havi-DREADWYRMTRANCE.twit-01.jpg';
import portrait from '../images/portrait.png';
import crystal from '../images/crystal.png';

const Scrying = () => {
  return (
    <ScryingContainer>
      <ScryingHeadline>
        <h2 id="scrying">scrying</h2>
        <Constellation src={capricorn} alt="capricorn constellation" />
        <Constellation src={aquarius} alt="aquarius constellation" />
        <SpellDescription>
          see and hear a particular creature you choose that is on the same plane of existence as you.
        </SpellDescription>
        <About>
          <img src={crystal} alt="crystal" />
          <p>
            Havier Miniti is one of the world’s most infamous wizards. He has co-owned and operated Machault Occult with his dead husband, Tanum Machault, for the last several decades. Do not ask him how old he is.
          </p>       
        </About>
      </ScryingHeadline>
      <Portrait>
        {/* <img src={portrait} alt="shop owner, Havier Miniti" /> */}
      </Portrait>
    </ScryingContainer>
  )
}

export default Scrying;

const ScryingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ScryingHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 2;

  h2 {
    font-size: 14rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    margin-left: 9rem;
    /* margin-top: 3rem; */
    z-index: 2;
  }
`;

const Constellation = styled.img`
    width: 20%;
    z-index: 1;
    position: absolute;
    margin: 0 0.5rem;
    top: 0px;
    :nth-child(2) {
      left: 650px;
    }
`;

const SpellDescription = styled.p`
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

const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 30rem 20rem 0 4rem;
  img {
    width: 8%;
    margin: 0 2rem 0 0;
  }
  p {
    font-size: 2.2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: black;
  }
`;

const Portrait = styled.div`
  background-image: url(${portrait});
  background-size: 100%;
  background-repeat: no-repeat;
  flex: 1;
`;