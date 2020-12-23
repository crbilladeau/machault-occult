import React from 'react';
import styled from 'styled-components';
import {HeadlinesBox} from './LegendLore';
import sending from '../images/sending.png';
import hermit from '../images/hermit.png';
import goldeye from '../images/goldeye.png';

const Sending = () => {
  return (
    <SendingContainer>
      <HeadlinesBox>
      <Eye src={goldeye} alt="gold eye" id="sending"/>
        <h1>sending</h1>
        <SpellDescription>
          <p>send a short message of twenty-five words or less to a creature with which you are familiar. the creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately.</p>
        </SpellDescription>
      </HeadlinesBox>
      <MiddleRow>
        <Disclaimer>
        
        <p>Unfortunately, Mr. Miniti does not have social media, email, or a phone number. Being the busy and hardworking wizard that he is, Mr. Miniti is unavailable for comment at this time. 
          <br />
          <br />
          For any and all inquiries, please contact our shop’s intern for your request to be considered.**</p>
        </Disclaimer>
        <Disclaimer>
        <Hermit src={hermit} alt="hermit tarot" />          
        <p>** Please respect the privacy of Mr. Miniti. If you have a question, do not call, whether by magical means or otherwise. Inquiries about Arnam Kingstar and the Cult of Sorrows should be sent to Joaquin Calloway, The Nightingale. Any attempts made to contact Mr. Miniti directly will be filtered by magic and ignored, and you may becpme cursed at your own risk. If a request makes it to Mr. Miniti through his intern and he deems it worthy of his time, he might get back to you in the next decade.</p>
        </Disclaimer>
      </MiddleRow>
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
  @media screen and (max-width: 1024px) {
    margin-top: 10rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
  @media screen and (max-width: 420px) {
    margin-top: 20rem;
  }
  
  h1 {
    font-size: 12vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    align-self: flex-end;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
    z-index: 2;

    @media screen and (max-width: 768px) {
      font-size: 20vw;
      margin-top: 8rem;
    }
    @media screen and (max-width: 420px) {
      align-self: center;
      margin-right: 0;
    }
  }
`;

const SpellDescription = styled.div`
  align-self: center;
  max-width: 48vw;    
  z-index: 1;
  align-self: flex-end;
 
  @media screen and (max-width: 768px) {
    max-width: 100%;
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
    margin: 3rem 2vw;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 2rem 0;
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    margin: 2rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 2rem 1rem;
  }
}
`;

const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    height: 100vh;
  }
  `;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  p:nth-child(1) {
    align-self: flex-start;
    color: white;
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    text-align: left;
    line-height: 2.4vw;
    margin: 0 4rem;
    @media screen and (max-width: 1024px) {
      margin: 0 2rem;
    }  
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
      text-align: center;
      margin: 0 2rem;
      max-width: 100%;
    }
    @media screen and (max-width: 420px) {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin: 2rem;
    }
  }
  p:nth-child(2) {
  color: white;
  font-size: 0.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  line-height: 1.2rem;
  margin: 6rem 4rem 4rem 4rem;
  text-align: right;
  @media screen and (max-width: 1024px) {
    margin: 2rem 2rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0 2rem 2rem 2rem;
  }
  @media screen and (max-width: 420px) {
    color: black;
    margin: 2rem 1rem;
    text-align: left;
  }
}
`;

const Eye = styled.img`
  width: 50%;
  transform: rotate(90deg);
  position: absolute;
  top: -30px;
  left: 0;
  @media screen and (max-width: 768px) {
    top: -80px;
  }
  @media screen and (max-width: 600px) {
    top: -20px;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    top: -300px;

  }
`;

const Hermit = styled.img`
  width: 50%;
  margin: 0;
  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    width: 30%;
  }
  @media screen and (max-width: 420px) {
    width: 60%;
  }
`;