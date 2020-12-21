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
        <MenuSquare></MenuSquare>
        <MenuSquare>
          <NavLink to="locate-object" smooth={true} duration={500} spy={true} exact='true'>locate object</NavLink>
        </MenuSquare>      
        <MenuSquare></MenuSquare>
        <MenuSquare><NavLink to="scrying" smooth={true} duration={500} spy={true} exact='true'>scrying</NavLink></MenuSquare>
        <MenuSquare><Logo src={eyelogo} /></MenuSquare>
        <MenuSquare><NavLink to="legend-lore" smooth={true} duration={500} spy={true} exact='true'>legend lore</NavLink></MenuSquare>
        <MenuSquare></MenuSquare>
        <MenuSquare><NavLink to="teleport" smooth={true} duration={500} spy={true} exact='true'>teleport</NavLink></MenuSquare>
        <MenuSquare></MenuSquare>
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto; 
  
  @media screen and (max-width: 768px) {
    grid-gap: 0.5rem;
  }
`;


// TODO: FIX WEIRD SCROLLBAR ISSUE ON HOVER...

const MenuSquare = styled.div`
  display: grid;
  :nth-child(2) {
    align-self: end;
  }
  :nth-child(4)  {
    justify-content: end;
  }
  :nth-child(5) {
    justify-content: center;
  }
  :nth-child(6) {
    justify-content: start;
  }
  :nth-child(8) {
    align-self: start;
  }
    /* &:after {    
      background: none repeat scroll 0 0 transparent;
      bottom: -5px;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #FFCA3A;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    &:hover:after { 
      width: 100%;
      left: 0; 
    } */
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
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;
