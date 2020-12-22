import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, animateScroll as scroll} from 'react-scroll';
import main from '../images/main.png';
import eyelogo from '../images/eye-logo.svg';

const Home = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  

  return (
    <HomeContainer>
      <MenuContainer scrollNav={scrollNav}>
        <NavLink to="sending" smooth={true} duration={500} spy={true} exact='true'>sending</NavLink>
        <NavLink to="locate-object" smooth={true} duration={500} spy={true} exact='true'>locate object</NavLink>
        <NavLink to="legend-lore" smooth={true} duration={500} spy={true} exact='true'>legend lore</NavLink>
        <NavLink to="teleport" smooth={true} duration={500} spy={true} exact='true'>teleport</NavLink>
        <Logo src={eyelogo} />
        <NavLink to="scrying" smooth={true} duration={500} spy={true} exact='true'>scrying</NavLink>
      </MenuContainer>
    </HomeContainer>
  )
}

export default Home;


// styles

const HomeContainer = styled.div`
  background-image: url(${main});
  background-repeat:no-repeat;
  background-size: 100% 100%;
  background-position: center top;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.nav`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 0;
  justify-content: center;
  align-items: center;
  margin: 0 auto; 
  
  @media screen and (max-width: 768px) {
    grid-gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  text-align: center;
  transition: transform 300ms ease 100ms;
  &:hover {
    cursor: pointer;      
    transform: scale(1.2);
  }
  :nth-child(1) {
    align-self: flex-end;
  }
  :nth-child(3) {
    align-self: flex-end;
  }
  :nth-child(4) {
    align-self: flex-end;
  }
  :nth-child(6) {
    align-self: flex-end;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;
