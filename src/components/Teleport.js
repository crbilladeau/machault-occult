import React from 'react';
import styled from 'styled-components';
import {Disclaimer} from './LocateObject';
import astro from '../images/astro.png';
import bluedoor from '../images/blue-door.jpg';

const Teleport = () => {
  return (
    <TeleportHeadline>
      <h1 id="teleport">teleport</h1>
      <SpellDescription>
        <p>instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object, to a destination you select.</p>
      </SpellDescription>
      {/* <Astro src={astro} alt="astrology circle" /> */}
      <MiddleRow>
        <img src={bluedoor} alt="blue door" />        
        <Disclaimer>
        <p>The true location of our shop changes each day. Only skilled magic users capable of advanced divination can ascertain our daily location. For the uniniated, our Google Maps coordinates are available on our Facebook page.**</p>
        <p>** Machault Occult and its owner(s) are not responsible or liable for accidental banishments to other planes of existence as a result of unlawful entry onto the premises or entering outside of business hours, nor for any items “lost” or left behind on the property. Machault Occult reserves the right to banish any customers at the owner’s discretion. We will not update our Facebook page or post consistent business hours - stop asking, or we will delete it.</p>
        </Disclaimer>
      </MiddleRow>
    </TeleportHeadline>
  )
}

export default Teleport;

const TeleportHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  /* height: 100vh; */

  h1 {
    font-size: 10vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    margin-left: 9vw;
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
`;

const SpellDescription = styled.p`
    align-self: flex-start;
    margin: 3rem 0 0 15rem;
    max-width: 40vw;
    font-size: 1.8vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    text-align: left;
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

const Astro = styled.img`
  width: 60%;
  margin-left: -14rem;
  position: absolute;
  top: 0;
  right: -100px;
  transform: rotate(320deg);

  /* @media screen and (max-width: 1600px) {
    top: 300px;
    left: 60px;
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
    left: 100px;
  } */
  /* @media screen and (max-width: 600px) {
    width: 85%;
    top: 700px;
    left: 248px;
    transform: rotate(85deg);
  } */
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;  
  align-items: flex-end;
  z-index: 2;
  p:nth-child(1) {
    position: absolute;
    bottom: -60px;
    left: 100;
    align-self: flex-start;
    margin: 0 6rem 6rem 6rem;
    max-width: 40vw;
    color: black;
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    text-align: left;
    line-height: 2.4vw;
    @media screen and (max-width: 600px) {
      text-align: center;
      margin: 10rem 1rem 0 1rem;
      font-size: 6vw;
      line-height: 7vw;
      max-width: 100%;
    }
  }
  p:nth-child(2) {
    position: absolute;
    bottom: -150px;
    color: black;
    margin: 2rem 4rem;
    text-align: right;
    max-width: 100%;

  }
  img {
    width: 40%;
    margin: 2rem 4rem 0 4rem;
    align-self: flex-start;
  }
`;
