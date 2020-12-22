import React from 'react';
import styled from 'styled-components';
import astro from '../images/astro.png';
import astroimage from '../images/astro-image.png';
import bluedoor from '../images/blue-door.jpg';

const Teleport = () => {
  return (
    <TeleportHeadline>
      <h1 id="teleport">teleport</h1>
      <SpellDescription>
        <p>instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object, to a destination you select.</p>
      </SpellDescription>
      <Astro src={astro} alt="astrology circle" />
      <MiddleRow>
        
        <img src={bluedoor} alt="blue door" />
        <img src={astroimage} alt="blue door with astrology circle" />         
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
  
  h1 {
    font-size: 12vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
    margin-left: 4rem;
    z-index: 2;
    @media screen and (max-width: 1600px) {
      color: black;
      text-shadow: 3px 3px 0 rgba(255,255,255,1);
    }
    @media screen and (max-width: 768px) {
      font-size: 20vw;
      color: white;
      text-shadow: 3px 3px 3px rgba(0,0,0,1), 3px 3px 3px rgba(0,0,0,1);
      margin-left: 2rem;
    }
  }
`;

const SpellDescription = styled.div`
  align-self: flex-start;
  margin: 3rem 4rem 0 4rem;
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
  @media screen and (max-width: 1600px) {
    color: black;
    text-shadow: none;
  }
  @media screen and (max-width: 768px) {
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,1), 2px 2px 2px rgba(0,0,0,1);
    margin: 2rem 2rem 0 2rem;
    font-size: 1rem;
    line-height: 1.4rem;
    max-width: 75vw;
    align-self: flex-end;
    text-align: right;
  }
  @media screen and (max-width: 420px) {
    margin: 2rem 1rem 0 1rem;
  }
`;

const Astro = styled.img`
  width: 60vw;
  position: absolute;
  top: 100px;
  right: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;  
  height: 600px;
  z-index: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    margin: 2rem auto;
    height: 100%;
  }

  img:nth-child(1) {
    width: 40%;
    margin: 5vw 10vw 0 0;
    align-self: flex-start;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  img:nth-child(2) {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 100%;
    }
  }
`;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10rem 4rem 0 4rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    margin: 10rem 2rem 0 2rem;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }

  p:nth-child(1) {
    max-width: 36vw;
    color: black;
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    text-align: left;
    line-height: 2.4vw;
    @media screen and (max-width: 1024px) {
      max-width: 40vw;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
      text-align: center;
      margin: 4rem 2rem;
      max-width: 100%;
    }
    @media screen and (max-width: 420px) {
      margin: 2rem 2rem;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

  }
  p:nth-child(2) {
    color: black;
    font-size: 0.8rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 1.2rem;
    max-width: 40vw;
    margin-top: 4rem;
    text-align: left;
    @media screen and (max-width: 1024px) {
      max-width: 100%;
      margin: 4rem 1rem;
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
      margin: 0 2rem;
    }
    @media screen and (max-width: 320px) {
      margin: 0 1rem;
    }
  }
`;