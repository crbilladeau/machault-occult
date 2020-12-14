import React from 'react';
import styled from 'styled-components';
import main from '../images/main.png';
import eyelogo from '../images/eye-logo.svg';

const Home = () => {
  return (
    <HomeContainer>
      <MenuContainer>
        <MenuSquare></MenuSquare>
        <MenuSquare>
          <h1>locate object</h1>
        </MenuSquare>      
        <MenuSquare></MenuSquare>
        <MenuSquare><h1>identify</h1></MenuSquare>
        <MenuSquare><Logo src={eyelogo} /></MenuSquare>
        <MenuSquare><h1>legend lore</h1></MenuSquare>
        <MenuSquare></MenuSquare>
        <MenuSquare><h1>sending</h1></MenuSquare>
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
  width: 100vw;
`;

const MenuContainer = styled.div`
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
  h1 {
    color: white;
    font-size: 3.5rem;
    font-weight: 300;
    font-family: 'Liu Jian Mao Cao', cursive;
    text-align: center;
    transition: transform 300ms ease 100ms;
    &:hover {
      cursor: pointer;      
      transform: scale(1.2);
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
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;
