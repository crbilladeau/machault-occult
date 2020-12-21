import React from 'react';
import styled from 'styled-components';
import legendlore from '../images/legend-lore.png';
import prettyodd from '../images/prettyodd.png';
import eye from '../images/eye.png'
import moon from '../images/moon.png';
import OccultSection from './Occult';
import ScryingSection from './Scrying';

const LegendLore = () => {
  return (
    <LegendContainer>
    
      <Moon src={moon} alt="moon" />
      <HeadlinesBox>  
        <h1 id="legend-lore">legend lore</h1>
        <SpellDescription><p>the spell brings to your mind a brief summary of the significant lore about the thing you named, consisting of current tales, forgotten stories, or even secret lore that has never been widely known.</p></SpellDescription>
          </HeadlinesBox>
          <MiddleRow>
            <MoonBox>
              <MoonSmall src={moon} alt="moon" />
              <h2>Machault<br/>Occult</h2>
              <p>is a prestigious collection of rare and extraordinary magical artefacts meticulously curated from around the world.</p>
            </MoonBox>
            <Oddities src={prettyodd} alt="shop interior" />
          </MiddleRow>

      <OccultSection />
      <ScryingSection />
    </LegendContainer>
  )
}

export default LegendLore;


// styles

const LegendContainer = styled.div`
  background-image: url(${legendlore});
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;
  /* overflow-x: hidden; */
`;

const Moon = styled.img`
  width: 67%;
  margin-left: -14rem;
  position: absolute;
  top: 500px;
  left: 0;
  @media screen and (max-width: 1600px) {
    top: 300px;
    left: 60px;
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
    left: 100px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MoonSmall = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    transform: rotate(85deg);
    width: 100%;
  }
`;

export const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 1rem 2rem 1rem;
  @media screen and (max-width: 600px) {
    margin: 1rem;
  }
  h1 {
    font-size: 12vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    text-align: right;
    color: white;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
    margin: 14rem 4rem 0 0;
    z-index: 1;
    @media screen and (max-width: 600px) {
      margin: 16rem 0 0 0;
      font-size: 20vw;
    }
    @media screen and (max-width: 420px) {
      margin: 16rem 0 0 0;
      font-size: 24vw;
    }
  }
`;

export const SpellDescription = styled.div`
  align-self: flex-end;
  max-width: 48vw;    
  z-index: 1;
  margin: 2vw 4vw 6vw 0;
  @media screen and (max-width: 600px) {
    max-width: 100%;
    align-self: flex-start;
    margin: 6rem 0 0 0;
  }
  p {
    font-size: 1.8vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    text-align: right;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    color: white;
    line-height: 2vw;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: center;
    
  }
  @media screen and (max-width: 420px) {
    font-size: 1.4rem;
    line-height: 1.6rem;


  }
}
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20vw 0;
  @media screen and (max-width: 1600px) {
    margin: -4vw 0 20vw 0;
  }
  @media screen and (max-width: 1600px) {
    margin: -6vw 0 20vw 0;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 10vw 0;
  }
`;

const MoonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  max-width: 50vw;

  @media screen and (max-width: 600px) {
    margin: 20vw 1.5rem 0 1.5rem;
    max-width: 100%;
  }
  h2 {
      font-size: 8vw;
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      color: white;
      text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
      line-height: 6.5vw;
    
    @media screen and (max-width: 600px) {
      font-size: 14vw;
      line-height: 12.5vw;
      text-align: center;

      position: absolute;
      top: 220px;
    }
    @media screen and (max-width: 420px) {
      top: 160px;
    }
    @media screen and (max-width: 420px) {
      top: 130px;
    }
  }
  p {
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    line-height: 2.4vw;
    margin: 1rem 0 0 10vw;
    @media screen and (max-width: 600px) {
      text-align: center;
      margin: 4rem 0.5rem;
      font-size: 6vw;
      line-height: 7vw;
      max-width: 100%;
    }
  }
`;

const Oddities = styled.img`
  width: 38%;
  z-index: 1;
  margin: 0 2rem;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;