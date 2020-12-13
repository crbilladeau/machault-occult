import React from 'react';
import styled from 'styled-components';
import legendlore from '../images/legend-lore.png';
import prettyodd from '../images/shop-interior.jpg';

const LegendLore = () => {
  return (
    <LegendContainer>      
      <div>
        <h2>Machault<br/>Occult</h2>
      </div>
      <div>
        <h1>legend lore</h1>
        <img src={prettyodd} alt="shop interior" />
      </div>
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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 8rem;
  }
  img {
    max-width: 600px;
    height: 100%auto;
  }
  h1 {
    font-size: 20rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
  }
  h2 {
    font-size: 14rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    line-height: 12rem;
  }
  /* div {
    background: white;
    height: 2000px;
    width: 1000px;
  } */
`;