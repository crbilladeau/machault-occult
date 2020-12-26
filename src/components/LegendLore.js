import React, {useEffect} from 'react';
import styled from 'styled-components';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import legendlore from '../images/legend-lore.png';
import prettyodd from '../images/prettyodd.png';
import eye from '../images/eye.png'
import moon from '../images/moon.png';
import OccultSection from './Occult';
import ScryingSection from './Scrying';

const LegendLore = () => {
  const moonControls = useAnimation();
  const [moonRef, moonInView] = useInView();

  const legendTitleControls = useAnimation();
  const [legendTitleRef, legendTitleInView] = useInView();

  const spellControls = useAnimation();
  const [spellRef, spellInView] = useInView();

  const moonBoxControls = useAnimation();
  const [moonBoxRef, moonBoxInView] = useInView();

  useEffect(() => {
    if (moonInView) {
      moonControls.start("visible");
    }
    if (legendTitleInView) {
      legendTitleControls.start("visible");
    }
    if (spellInView) {
      spellControls.start("visible");
    }
    if (moonBoxInView) {
      moonBoxControls.start("visible");
    }
  }, [moonControls, moonControls, legendTitleControls, legendTitleInView, moonBoxControls, moonBoxInView]);


  return (
    <LegendContainer>
    
      <Moon 
        src={moon} 
        alt="moon"
        ref={moonRef}        
        animate={moonControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 0 },
          hidden: { rotate: -60, opacity: 0}
        }}
        transition={{ duration: 2.4}}
      />
      <HeadlinesBox>  
        <Title 
          id="legend-lore"           
          ref={legendTitleRef}
          animate={legendTitleControls}
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0}
          }}
          transition={{ duration: 1.4 }}
          >
          legend lore</Title>
        <SpellDescription       
          animate={spellControls}
          ref={spellRef}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: '0%' },
            hidden: { opacity: 0, x: '100%' }
          }}
          transition={{ duration: 2.4 }}>
          <p>the spell brings to your mind a brief summary of the significant lore about the thing you named, consisting of current tales, forgotten stories, or even secret lore that has never been widely known.</p></SpellDescription>
          </HeadlinesBox>
          <MiddleRow>
            <MoonBox
              animate={moonBoxControls}
              ref={moonBoxRef}
              initial="hidden"
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0}
              }}
              transition={{ duration: 2 }}
            >
              <MoonSmall src={moon} alt="moon" />
              <Eye src={eye} alt="eye" />
              <h2>Machault<br/>Occult</h2>
              <p>is a prestigious collection of rare and extraordinary magical artefacts meticulously curated from around the world.</p>
            </MoonBox>
            <Oddities 
              src={prettyodd} 
              alt="shop interior"           
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, type: 'spring', bounce: 0.75}} />
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

const Moon = styled(motion.img)`
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
  @media screen and (max-width: 768px) {
    top: 600px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MoonSmall = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    transform: rotate(85deg);
    width: 100%;
  }
`;

export const HeadlinesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 4rem 2rem 4rem;
  overflow: hidden !important;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    position: relative;
  @media screen and (max-width: 768px) {
    margin: 0 2rem 2rem 2rem;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
  }
  @media screen and (max-width: 320px) {
    margin: 0;
  }
`;

const Title = styled(motion.h1)`
  font-size: 12vw;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-align: right;
  color: white;
  text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
  margin: 16rem 0 0 0;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 20vw;
    margin: 16rem 0 0 0;
  }
  @media screen and (max-width: 600px) {
    margin: 16rem 2rem 0 0;
    font-size: 20vw;
  }
  @media screen and (max-width: 420px) {
    margin: 16rem 2rem 0 0;
    font-size: 24vw;
  }
`;

export const SpellDescription = styled(motion.div)`
  align-self: flex-end;
  max-width: 46vw;    
  z-index: 1;
  margin: 3rem 0 6vw 0;
  @media screen and (max-width: 1200px) {
    max-width: 40vw;
  }
  @media screen and (max-width: 768px) {
    max-width: 50vw;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    align-self: flex-start;
    margin: 6rem 1rem 0 1rem;
  }
  @media screen and (max-width: 420px) {
    margin: 4rem 1rem 0 1rem;
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
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: right;
  }
  @media screen and (max-width: 850px) {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: right;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: left;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.4rem;
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

const MoonBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  max-width: 50vw;
  @media screen and (max-width: 1200px) {
    margin: 0 0 0 2rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 0 4rem 2rem;
  }
  @media screen and (max-width: 850px) {
    margin: 0 0 4rem 0;
  }
  @media screen and (max-width: 768px) {
    margin: 4rem 0 0 0;
  }
  @media screen and (max-width: 600px) {
    margin: 20vw 1.5rem 0 1.5rem;
    max-width: 100%;
  }
  h2 {
      font-size: 8vw;
      font-family: 'Playfair Display', serif;
      font-weight: 600;
      color: white;
      text-shadow: 3px 3px 3px rgba(0,0,0,0.50), 3px 3px 3px rgba(0,0,0,0.50);
      line-height: 6.5vw;
    @media screen and (max-width: 600px) {
      font-size: 14vw;
      line-height: 12.5vw;
      text-align: center;

      position: absolute;
      top: 220px;
    }
    @media screen and (max-width: 420px) {
      top: 160px;
    }
    @media screen and (max-width: 320px) {
      top: 120px;
    }
  }
  p {
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.50), 2px 2px 2px rgba(0,0,0,0.50);
    line-height: 2.4vw;
    margin: 1rem 0 4vw 12vw;
    @media screen and (max-width: 1200px) {
      margin: 1rem 0 8vw 12vw;
    }

    @media screen and (max-width: 600px) {
      text-align: center;
      margin: 4rem 0.5rem;
      font-size: 1.4rem;
      line-height: 1.8rem;
      max-width: 100%;
    }
    @media screen and (max-width: 420px) {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`;

const Eye = styled.img`
  position: absolute;
  top: 6.5vw;
  left: 7.45vw;
  width: 15%;
  z-index: 2;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Oddities = styled(motion.img)`
  width: 38%;
  z-index: 1;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 1rem;
  }
`;