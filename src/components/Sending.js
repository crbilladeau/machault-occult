import React, {useEffect} from 'react';
import styled from 'styled-components';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Footer from './Footer';
import sending from '../images/sending.png';
import hermit from '../images/hermit.png';
import goldeye from '../images/goldeye.png';

const Sending = () => {
  const sendingTitleControls = useAnimation();
  const [sendingTitleRef, sendingTitleInView] = useInView({triggerOnce: true});

  const sendingSpellControls = useAnimation();
  const [sendingSpellRef, sendingSpellInView] = useInView({triggerOnce: true});

  const eyeControls = useAnimation();
  const [eyeRef, eyeInView] = useInView({triggerOnce: true});

  const disclaimerControls = useAnimation();
  const [disclaimerRef, disclaimerInView] = useInView({triggerOnce: true});

  const sendingControls = useAnimation();
  const [sendingRef, sendingInView] = useInView({triggerOnce: true});

  const hermitControls = useAnimation();
  const [hermitRef, hermitInView] = useInView({triggerOnce: true});

  useEffect(() => {
    if (sendingTitleInView) {
      sendingTitleControls.start("visible");
    }
    if (sendingSpellInView) {
      sendingSpellControls.start("visible");
    }
    if (eyeInView) {
      eyeControls.start("visible");
    }
    if (hermitInView) {
      hermitControls.start("visible");
    }
    if (disclaimerInView) {
      disclaimerControls.start("visible");
    }
    if (sendingInView) {
      sendingControls.start("visible");
    }

  }, [sendingTitleInView, sendingTitleControls, sendingSpellInView, sendingSpellControls, eyeInView, eyeControls, disclaimerInView, disclaimerControls, sendingControls, sendingInView, hermitInView, hermitControls]);

  return (
    <SendingContainer id="sending">
      <HeadlinesBox>
      <Eye 
        src={goldeye} 
        alt="gold eye" 
        ref={eyeRef}
        animate={eyeControls}
        initial='hidden'
        variants={{
          visible: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '-50%' },
        }}
        transition={{ duration: 2 }}
      />
        <Title    
          ref={sendingTitleRef}
          animate={sendingTitleControls}
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0}
          }}
          transition={{ duration: 2 }}
        >
          sending
        </Title>
        <SpellDescription
          animate={sendingSpellControls}
          ref={sendingSpellRef}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: '0%' },
            hidden: { opacity: 0, x: '50%' }
          }}
          transition={{ duration: 2.4 }}
        >
          <p>send a short message of twenty-five words or less to a creature with which you are familiar. the creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately.</p>
        </SpellDescription>
      </HeadlinesBox>
      <MiddleRow>
        <Disclaimer>
        
        <SendingDescription
          initial="hidden"
          ref={sendingRef}
          animate={sendingControls}
          variants={{
            visible: { opacity: 1, x: '0%' },
            hidden: { opacity: 0, x: '-50%' }
          }}
          transition={{ duration: 2 }}  
        >
          Unfortunately, Mr. Miniti does not have social media, email, or a phone number. Being the busy and hardworking wizard that he is, Mr. Miniti is unavailable for comment at this time. 
          <br />
          <br />
          For any and all inquiries, please contact our shop’s intern for your request to be considered.**</SendingDescription>
        </Disclaimer>
        <Disclaimer>
          <Hermit 
            src={hermit} 
            alt="hermit tarot" 
            initial="hidden"
            ref={hermitRef}
            animate={hermitControls}
            variants={{
              visible: { opacity: 1, x: '0%' },
              hidden: { opacity: 0, x: '50%' }
            }}
            transition={{ duration: 2 }}  
          />          
          <DisclaimerDescription
            initial="hidden"
            ref={sendingRef}
            animate={sendingControls}
            variants={{
              visible: { opacity: 1, x: '0%' },
              hidden: { opacity: 0, x: '50%' }
            }}
            transition={{ duration: 2 }}  
          >
            ** Please respect the privacy of Mr. Miniti. If you have a question, do not call, whether by magical means or otherwise. Inquiries about Arnam Kingstar and the Cult of Sorrows should be sent to Joaquin Calloway, The Nightingale. Any attempts made to contact Mr. Miniti directly will be filtered by magic and ignored, and you may becpme cursed at your own risk. If a request makes it to Mr. Miniti through his intern and he deems it worthy of his time, he might get back to you in the next decade.
          </DisclaimerDescription>
        </Disclaimer>
      </MiddleRow>

      <Footer />
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
  overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
  @media screen and (max-width: 1024px) {
    margin-top: 10rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    height: 300vh;
    justify-content: flex-end;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 4rem 2rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 600px) {
  }
`;

const Title = styled(motion.h1)`
  font-size: 12vw;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  color: white;
  align-self: flex-end;
  text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
  z-index: 2;
  margin-top: 20rem;
  @media screen and (max-width: 768px) {
    font-size: 20vw;
    margin: 0 2rem 0 2rem;
  }
  @media screen and (max-width: 420px) {
    align-self: center;
  }
`;

const SpellDescription = styled(motion.div)`
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
    margin: 2rem;
    text-align: center;
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
  z-index: 2;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10rem;
  }
  `;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 6rem 0 0 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 2rem 0 0 0;
  }
`;

const DisclaimerDescription = styled(motion.p)`
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
    margin: 4rem 1rem;
    text-align: left;
  }
`;

const SendingDescription = styled(motion.p)`
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
`;

const Eye = styled(motion.img)`
  width: 50%;
  position: absolute;
  top: -30px;
  left: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    top: 0px;  
  }
`;

const Hermit = styled(motion.img)`
  width: 50%;
  margin: 0;
  @media screen and (max-width: 768px) {
    margin: 4rem 0;
    width: 50%;
  }
  @media screen and (max-width: 420px) {
    width: 60%;
  }
`;