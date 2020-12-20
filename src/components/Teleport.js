import React from 'react';
import styled from 'styled-components';

const Teleport = () => {
  return (
    <TeleportHeadline>
      <h2>teleport</h2>
      <SpellDescription>
        <p>instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object, to a destination you select.</p>
      </SpellDescription>
      
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
  margin-top: 6rem;

  h2 {
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
    margin: 3rem 0 3rem 15rem;
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