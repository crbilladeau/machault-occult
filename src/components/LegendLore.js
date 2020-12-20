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
    width: 85%;
    top: 700px;
    left: 248px;
    transform: rotate(85deg);
  }
`;

export const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 1rem 2rem 1rem;

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
  }
`;

export const SpellDescription = styled.div`
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
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    color: white;
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
  @media screen and (max-width: 600px) {
    margin: 40vw 0 6vw 0;
  }
  h2 {
      font-size: 8vw;
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      color: white;
      text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
      line-height: 6.5vw;
      align-self: center;
    @media screen and (max-width: 600px) {
      font-size: 14vw;
      line-height: 12.5vw;
      text-align: center;
    }
    @media screen and (max-width: 420px) {
      margin-top: 2rem;
    }
  }
  p {
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    line-height: 2.4vw;
    max-width: 40vw;
    margin: 1rem 0 0 12vw;
    @media screen and (max-width: 600px) {
      text-align: center;
      margin: 10rem 1rem 0 1rem;
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
    margin: 4rem 0;
  }
`;