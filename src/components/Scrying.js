import React, {useEffect} from 'react';
import styled from 'styled-components';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import capricorn from '../images/Capricornus.png';
import aquarius from '../images/Aquarius.png';
import portrait from '../images/portrait.png';
import crystal from '../images/crystal.png';
const Scrying = () => {
  const scryingTitleControls = useAnimation();
  const [scryingTitleRef, scryingTitleInView] = useInView({triggerOnce: true});

  const constellationControls = useAnimation();
  const [constellationRef, constellationInView] = useInView({triggerOnce: true});

  const scryingSpellControls = useAnimation();
  const [scryingSpellRef, scryingSpellInView] = useInView({triggerOnce: true});

  const aboutControls = useAnimation();
  const [aboutRef, aboutInView] = useInView({triggerOnce: true});

  useEffect(() => {
    if (scryingTitleInView) {
      scryingTitleControls.start('visible');
    }
    if (constellationInView) {
      constellationControls.start('visible');
    }
    if (scryingSpellInView) {
      scryingSpellControls.start('visible');
    }
    if (aboutInView) {
      aboutControls.start('visible');
    }
  }, [scryingTitleControls, constellationControls, scryingTitleInView, constellationInView, scryingSpellControls, scryingSpellInView, aboutControls, aboutInView]);

  return (
    <ScryingContainer>        
      <Constellation 
        src={aquarius} 
        alt="aquarius constellation" 
        ref={constellationRef}        
        animate={constellationControls}
        initial="hidden"
        variants={{
          visible: { opacity: [0, 1, 0]},
          hidden: { opacity: 0 }
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        /> 
      <Constellation 
        src={capricorn} 
        alt="capricorn constellation"         
        ref={constellationRef}        
        animate={constellationControls}
        initial="hidden"
        variants={{
          visible: { opacity: [0, 1, 0]},
          hidden: { opacity: 0 }
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        />
      <ScryingHeadline>
        <Title
          id="scrying"           
          ref={scryingTitleRef}
          animate={scryingTitleControls}
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0}
          }}
          transition={{ duration: 2 }}>scrying</Title>

        <SpellDescription
          animate={scryingSpellControls}
          ref={scryingSpellRef}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: '0%' },
            hidden: { opacity: 0, x: '-50%' }
          }}
          transition={{ duration: 2 }}
        >
          see and hear a particular creature you choose that is on the same plane of existence as you.
        </SpellDescription>
        <About
          ref={aboutRef}
          animate={aboutControls}
          initial='hidden'
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 1.4}}>
          <Crystal 
            src={crystal} 
            alt="crystal"
            animate={{ y: [0, -15, 0]}}
            transition={{
              repeat: Infinity,
              duration: 3,
              type: 'spring',
              bounce: 0.75,
            }}
          />
          <p>
            Havier Miniti is one of the world’s most venerable wizards. He has co-owned and operated Machault Occult with his late husband, Tanum Machault, for the last several decades. Do not ask him how old he is.
          </p>       
        </About>
      </ScryingHeadline>
      <Portrait           
          ref={aboutRef}
          animate={aboutControls}
          initial='hidden'
          variants={{
            visible: { opacity: 1, y: '0'},
            hidden: { opacity: 0, y: '50%'},
          }}
          transition={{ duration: 2.4, delay: 0.6 }}>
        <img src={portrait} alt="shop owner, Havier Miniti" />
      </Portrait>
    </ScryingContainer>
  )
}

export default Scrying;

const ScryingContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const ScryingHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 2;
  margin-top: 20rem;
  @media screen and (max-width: 768px) {
    margin-top: 10rem;
    align-items: center;
  }
  @media screen and (max-width: 420px) {
    margin-top: 4rem;
  }


  }
`;

const Title = styled(motion.h1)`
  font-size: 12vw;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  color: white;
  margin-left: 4rem;
  align-self: flex-start;
  text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 20vw;
    margin-left: 2rem;
  }
`;

const Constellation = styled(motion.img)`
  width: 20%;
  z-index: 1;
  position: absolute;
  margin: 20rem 0.5rem 0 0.5rem;
  top: 0px;

  :nth-child(2) {
    left: 30vw;
    @media screen and (max-width: 768px) {
      left: 50vw;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 10rem;
    width: 40%;
  }
  @media screen and (max-width: 420px) {
    margin-top: 4rem;
  }
`;

const SpellDescription = styled(motion.p)`
  align-self: flex-end;
  margin: 3rem 2rem;
  max-width: 30vw;
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  text-align: right;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
  color: white;
  line-height: 2vw;
  z-index: 2;
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    max-width: 70vw;
    margin: 2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    max-width: 100%;
    text-align: left;
    margin: 4rem 2rem 2rem 2rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 4rem 1rem 0 1.5rem;
    text-align: left;
  }
`;

const About = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4vw 0 2vw 2vw;
  color: white;

  @media screen and (max-width: 1024px) {
    margin: 0rem 4vw 2vw 2vw;
  }
  @media screen and (max-width: 768px) {
    margin: 10vw auto 10vw auto;
    max-width: 75vw;
  }
  @media screen and (max-width: 600px) {
    max-width: 80vw;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    max-width: 100%;
    margin: 0rem 1rem 4rem 1rem;
  }
  p {
    font-size: 2vw;
    line-height: 2.4vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: white;
    }
    @media screen and (max-width: 420px) {
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: center;
    }
  }
`;

const Crystal = styled(motion.img)`
  width: 16%;
  margin: 0 2rem 0 0;
  @media screen and (max-width: 1024px) {
    margin: 0 1rem 0 0;
  }
  @media screen and (max-width: 420px) {
    width: 20%;
    margin: 2rem 0 2rem 0;
  }
`;

const Portrait = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  margin: 20rem 2rem 0 2rem;
  @media screen and (max-width: 768px) {
    margin: 0 2rem 2rem 2rem;
  }
  @media screen and (max-width: 420px) {
    margin: 0 1rem 2rem 1rem;
  }
  img {
    width: 90%;  
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;