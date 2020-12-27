  
import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import {Link, animateScroll as scroll} from 'react-scroll';
import close from '../images/close.png';

const MobileNav = ({ navOpen, setNavOpen, scrollNav }) => {
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };

  useLockBodyScroll();

  return (
    <NavBar navOpen={navOpen} >
      <NavContainer>
        <CloseButton
          src={close}
          alt='close button'
          onClick={() => setNavOpen(!navOpen)}
          navOpen={navOpen}
        />
        <LinkContainer scrollNav={scrollNav}>
          <NavLink to="legend-lore" smooth={true} duration={800} spy={true} exact='true' offset={650} onClick={() => setNavOpen(false)}>legend lore</NavLink>
          <NavLink to="scrying" smooth={true} duration={800} spy={true} exact='true' offset={750} onClick={() => setNavOpen(false)}>scrying</NavLink>
          <NavLink to="locate-object" smooth={true} duration={800} spy={true} exact='true' offset={750} onClick={() => setNavOpen(false)}>locate object</NavLink>
          <NavLink to="teleport" smooth={true} duration={800} spy={true} exact='true' offset={750} onClick={() => setNavOpen(false)}>teleport</NavLink>
          <NavLink to="sending" smooth={true} duration={800} spy={true} exact='true' offset={800} onClick={() => setNavOpen(false)}>sending</NavLink>
        </LinkContainer>
      </NavContainer>
    </NavBar>
  );
};

export default MobileNav;

const NavBar = styled.nav`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  top: 0;
  margin: 1em 1em;
  right: 0;
  width: 100%;
  position: fixed;
  z-index: 50;
  height: 100%;
  /* transition: transform 0.3s ease-in-out;
  transform: ${({ navOpen }) =>
    navOpen ? 'translateX(0)' : 'translateX(-100%)'}; */
  margin: 0;
`;

 const CloseButton = styled.img`
  align-self: flex-end;
  margin: 1.5em 1.5em;
  width: 64px;
  cursor: pointer;
`;

 const NavContainer = styled.div`
  display: flex;
  z-index: 50;
  @media screen and (min-width: 769px) {
    img {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    background-color: #FFCA3A;
    flex-direction: column;
    width: 100%;
  }
`;

 const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 6rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 0 3em 0;
  }
`;

const NavLink = styled(Link)`
  color: black;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  text-align: center;
`;

