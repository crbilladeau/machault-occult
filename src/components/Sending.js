import React from 'react';
import styled from 'styled-components';
import {HeadlinesBox} from './LegendLore';
import sending from '../images/sending.png';

const Sending = () => {
  return (
    <SendingContainer>
      <HeadlinesBox>
        <h1>sending</h1>
        <SpellDescription>
          <p>send a short message of twenty-five words or less to a creature with which you are familiar. the creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately.</p>
        </SpellDescription>
      </HeadlinesBox>
    </SendingContainer>
  )
}

export default Sending;


const SendingContainer = styled.div`
  background-image: url(${sending});
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  
  h1 {
    align-self: center;
    margin-top: 20rem;
  }
`;

const SpellDescription = styled.div`
  align-self: center;
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
    text-align: center;
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