import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, animateScroll as scroll} from 'react-scroll';
import {motion} from 'framer-motion';
import useMightyMouse from 'react-hook-mighty-mouse';
import MobileNav from './MobileNav';
import main from '../images/main.png';
import eyelogo from '../images/eye-logo.png';
import eyemobile from '../images/eye-mobile.png';

const Home = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const [navOpen, setNavOpen] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const {
    selectedElement: {
      position: { angle },
    },
  } = useMightyMouse(true, 'eye', { x: 45, y: 45 });


  const styleEye = {
    transform: `rotate(${-angle}deg)`,
  };

  return (
    <>
    {navOpen ? (
      <MobileNav setNavOpen={setNavOpen} navOpen={navOpen} />
    ) : (
    <HomeContainer>
      <MenuContainer scrollNav={scrollNav}>
        <NavLink to="sending" smooth={true} duration={500} spy={true} exact='true'>sending</NavLink>
        <NavLink to="locate-object" smooth={true} duration={500} spy={true} exact='true'>locate object</NavLink>
        <NavLink to="legend-lore" smooth={true} duration={500} spy={true} exact='true'>legend lore</NavLink>
        <NavLink to="teleport" smooth={true} duration={500} spy={true} exact='true'>teleport</NavLink>
        <Logo
          src={eyelogo} 
          alt="eye" 
        />
          <Eye>
            <div id="eye" className="eye" style={styleEye}>
              <div className="pupil" />
            </div>
          </Eye>
        <EyeMobile 
          src={eyemobile} 
          alt="eye" 
          onClick={() => setNavOpen(!navOpen)} 
          navOpen={navOpen}
          animate={{
          scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 2.5, type: 'spring', bounce: 0.75}} />
        <NavLink to="scrying" smooth={true} duration={500} spy={true} exact='true'>scrying</NavLink>
      </MenuContainer>
    </HomeContainer>
    )
    }
  </>
  )
}

export default Home;


// styles

const HomeContainer = styled.div`
  background-image: url(${main});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const MenuContainer = styled.nav`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  padding: 1rem;
  text-align: center;
  transition: transform 300ms ease 100ms;
  z-index: 2;
  &:hover {
    cursor: pointer;      
    transform: scale(1.2);
  }
  :nth-child(1) {
    align-self: flex-end;
    justify-self: flex-end;
  }
  :nth-child(3) {
    align-self: flex-end;
    justify-self: flex-start;
  }
  :nth-child(4) {
    align-self: center;
    justify-self: flex-end;
  }
  :nth-child(8) {
    align-self: center;
    justify-self: flex-start;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

`;

const Logo = styled.img`
  width: 500px;
  margin: auto;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const EyeMobile = styled(motion.img)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 60%;
    margin: 0 0 10rem 0;
    z-index: 4;
    align-self: center;
  }
  @media screen and (max-width: 420px) {
    width: 80%;
  }
`;

const Eye = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 500px;
  right: 0px;
  position: absolute;
  z-index: 1;

  .eye {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    z-index: 2;
  }
    .pupil {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      @media screen and (max-width: 1024px) {
        width: 50px;
        height: 50px;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;
