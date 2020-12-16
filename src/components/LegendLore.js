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
    color: white;
    margin: 14rem 10rem 0 0;
    z-index: 1;
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
    }
  p {
    font-size: 2.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: white;
    line-height: 3.5rem;
    max-width: 800px;
    margin: 0.5rem 0 0 0;
  }
`;

const Eye = styled.img`
  position: absolute;
  top: 100px;
  left: -12px;
  width: 16%;
`;

const Oddities = styled.img`
  width: 25%;
  margin: auto;
  z-index: 1;
`;