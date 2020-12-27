import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cup from '../images/cup.png';
import crystalball from '../images/crystalball.png';
import crown from '../images/crown.png';
import poison from '../images/poison.png';
import hand1 from '../images/hand1.png';
import hand2 from '../images/hand2.png';
import dust from '../images/dust.png';

const Occult = () => {
  const occultTitleControls = useAnimation();
  const [occultTitleRef, occultTitleInView] = useInView({triggerOnce: true});

  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({triggerOnce: true});

  useEffect(() => {
    if (occultTitleInView) {
      occultTitleControls.start('visible');
    }
    if (imageInView) {
      imageControls.start('visible');
    }
  }, [occultTitleControls, imageControls, occultTitleInView, imageInView]);

  return (
    <>
      <OccultHeadline
        ref={occultTitleRef}
        animate={occultTitleControls}
        initial='hidden'
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -100 },
        }}
        transition={{ duration: 2 }}>
        <h2>
          occult<span>[ uh-kuhlt, ok-uhlt ]</span>
        </h2>
        <SpellDescription>
          1. of or relating to magic, astrology, or any system claiming use or
          knowledge of secret or supernatural powers or agencies.
          <br />
          2. beyond the range of ordinary knowledge or understanding;
          mysterious.
          <br />
          3. secret; disclosed or communicated only to the initiated.
        </SpellDescription>
        <Dust src={dust} alt='sparkles' />
      </OccultHeadline>
      <OccultImages
        ref={imageRef}
        animate={imageControls}
        initial='hidden'
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 1.4 }}>
        <OccultImage
          src={cup}
          alt='goblet'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1], y: [0, 40, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            type: 'spring',
            bounce: 0.75,
          }}
        />
        <OccultImage
          src={crystalball}
          alt='crystal ball'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1], y: [0, -40, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            type: 'spring',
            bounce: 0.75,
          }}
        />
        <OccultImage
          src={crown}
          alt='crown'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1], y: [0, 40, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            type: 'spring',
            bounce: 0.75,
          }}
        />
        <OccultImage
          src={poison}
          alt='poison'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1], y: [0, -40, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            type: 'spring',
            bounce: 0.75,
          }}
        />
      </OccultImages>
      <Hands
        animate={imageControls}
        initial='hidden'
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 1.4, delay: 1 }}>
        <Hand 
          src={hand1} 
          alt='hand'           
          animate={{ scale: [1, 1.05, 1], y: [0, -10, 0], rotate: [20, 0, 20] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            type: 'spring',
            bounce: 0.75,
          }}
          />
        <Hand 
          src={hand2} 
          alt='hand' 
          animate={{ scale: [1, 1.05, 1], y: [0, -10, 0], rotate: [-20, 0, -20] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            type: 'spring',
            bounce: 0.75,
          }}/>
      </Hands>
    </>
  );
};

export default Occult;

const OccultHeadline = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
  h2 {
    font-size: 10vw;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(0, 0, 0, 0.5);
    margin-right: 24rem;
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
  span {
    font-size: 2vw;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #ffca3a;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(0, 0, 0, 0.5);
    margin-left: 3rem;
    z-index: 2;
    @media screen and (max-width: 850px) {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
  }
`;

const SpellDescription = styled.p`
  max-width: 1000px;
  margin: 2rem 4rem;

  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(0, 0, 0, 0.5);
  color: white;
  line-height: 3rem;
  z-index: 2;
  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: right;
    margin: 2rem 2rem 0 6rem;
    max-width: 800px;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin: 2rem 3rem 0 3rem;
    text-align: left;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 2rem 1rem 0 2rem;
    text-align: left;
  }
`;

const Dust = styled.img`
  position: absolute;
  width: 50%;
  top: -200px;
  margin-top: 20rem;
  z-index: 1;
  transform: rotate(-90deg);
  @media screen and (max-width: 768px) {
    transform: rotate(-180deg);
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    top: 200px;
  }
  @media screen and (max-width: 462px) {
    top: 500px;
  }
  @media screen and (max-width: 375px) {
    top: 600px;
  }
  @media screen and (max-width: 320px) {
    top: 700px;
  }
`;

const OccultImages = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 6rem auto;
  width: 75%;
  z-index: 2;
`;

const OccultImage = styled(motion.img)`
  width: 200px;
  margin: 1rem;
  z-index: 2;
  @media screen and (max-width: 768px) {
    margin: 4rem 0;
  }
  :nth-child(3) {
    width: 300px;
    @media screen and (max-width: 320px) {
      width: 260px;
    }
  }
  :nth-child(4) {
    width: 180px;
  }
}
`;

const Hands = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 8rem auto 0 auto;
  z-index: 3;
  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }
`;

const Hand = styled(motion.img)`
  width: 350px;
  margin: 0 6rem;
  :nth-child(1) {
    margin: 0;
  }
  :nth-child(2) {
    @media screen and (max-width: 1024px) {
      display: none;
      margin: 0;
    }
  }
  @media screen and (max-width: 420px) {
    width: 260px;
  }
  @media screen and (max-width: 320px) {
    width: 240px;
  }
`;
