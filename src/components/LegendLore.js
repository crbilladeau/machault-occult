import React from 'react';
import styled from 'styled-components';
import legendlore from '../images/legend-lore.png';
import prettyodd from '../images/shop-interior.jpg';
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
        <SpellDescription>the spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known.</SpellDescription>
          <MiddleRow>
            <MoonBox>
              <h2>Machault<br/>Occult</h2>
              <Eye src={eye} alt="eye" />   
              <p>is a prestigious collection of rare and extraordinary magical artefacts meticulously curated from around the world.</p>
            </MoonBox>
            <Oddities src={prettyodd} alt="shop interior" />
          </MiddleRow>
      </HeadlinesBox>

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
  margin-top: 12rem;
  margin-left: -14rem;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 1920px) {
    margin-top: 20rem;
    margin-left: -10rem;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 19rem;
    margin-left: -8rem;
  }
  @media screen and (max-width: 850px) {
    margin-top: 14rem;
    margin-left: -6rem;
  }
`;

const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  
  h1 {
    font-size: 14rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    text-align: right;
    color: white;
    margin: 14rem 10rem 0 0;
    z-index: 1;
    @media screen and (max-width: 1920px) {
      margin: 14rem 2rem 0 0;
    }
    @media screen and (max-width: 1200px) {
      font-size: 10rem;
      margin: 10rem 2rem 0 0;
    }
    @media screen and (max-width: 850px) {
      font-size: 8rem;
      margin: 6rem 1rem 0 0;
    }
  }
`;

const SpellDescription = styled.p`
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  text-align: right;
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
  line-height: 2rem;
  max-width: 900px;
  align-self: flex-end;
  margin: 3rem 12rem 3rem 0;
  z-index: 2;
  @media screen and (max-width: 1920px) {
    margin: 2rem 4rem 2rem 0;
    max-width: 700px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin: 2rem 2rem 2rem 0;
    max-width: 500px;
  }
  @media screen and (max-width: 850px) {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 2rem 1rem 2rem 0;
    max-width: 350px;
  }
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MoonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: auto;
  z-index: 1;
  position: relative;

  h2 {
      font-size: 8rem;
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      color: white;
      line-height: 6.5rem;
      @media screen and (max-width: 1920px) {
        font-size: 6rem;
        line-height: 5.5rem;
      }
      @media screen and (max-width: 1200px) {
        font-size: 4rem;
        line-height: 3.5rem;
      }
      @media screen and (max-width: 850px) {
        font-size: 3rem;
        line-height: 2.5rem;
      }
    }
  p {
    font-size: 2.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: white;
    line-height: 3.5rem;
    max-width: 800px;
    margin: 0.5rem 0 0 0;
    @media screen and (max-width: 1920px) {
      font-size: 1.8rem;
      line-height: 2.8rem;
      max-width: 500px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
      max-width: 350px;
    }
    @media screen and (max-width: 850px) {
      font-size: 1rem;
      line-height: 1.6rem;
      max-width: 300px;
    }
  }
`;

const Eye = styled.img`
  position: absolute;
  top: 109px;
  left: -3px;
  width: 14%;
  @media screen and (max-width: 1920px) {
    top: 102px;
    left: 2px;
    width: 15%;
  }
  @media screen and (max-width: 1920px) {
    top: 62px;
    left: 0px;
  }
  @media screen and (max-width: 850px) {
    top: 44px;
    left: 1px;
    width: 12%;
  }
`;

const Oddities = styled.img`
  width: 25%;
  margin: auto;
  z-index: 1;
`;