import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>All Rights Reserved. &copy; Machault Occult</p>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  p {
    margin: 2rem 1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 200;
    font-size: 0.8rem;
  }
`;
