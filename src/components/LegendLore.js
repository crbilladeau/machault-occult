import React from 'react';
import styled from 'styled-components';
import legendlore from '../images/legend-lore.png';
import prettyodd from '../images/shop-interior.jpg';
import eye from '../images/eye.png'
import moon from '../images/moon.png';

const LegendLore = () => {
  return (
    <LegendContainer>
      <Moon src={moon} alt="moon" />
      <HeadlinesBox>  
        <h1 id="legendlore">legend lore</h1>
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
  /* height: 1200px; */
  /* width: 100vw; */
`;

const Moon = styled.img`
  width: 1600px;
  margin-top: 12rem;
  margin-left: -14rem;

  @media screen and (max-width: 2000px) {
    width: 1200px;
    margin-top: 20rem;
  }
`;

const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  h1 {
    font-size: 14rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    margin: 14rem 10rem 0 0;
  }
`;

const SpellDescription = styled.p`
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 200;
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
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const MoonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: auto;
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
  top: 886px;
  left: 245px;
  width: 130px;
`;

const Oddities = styled.img`
  width: 550px;
  background-repeat:no-repeat;
  background-size:100% auto;
  margin: auto;
`;