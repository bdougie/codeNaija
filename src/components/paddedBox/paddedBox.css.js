import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;
  font-size: 2rem;
  max-width: 55%;
  margin: auto;
  text-align: center;
  line-height: 1.8;

  ${MEDIA.TABLET`
    display: block;
    max-width: 100%;
    width: 90%;
    margin: 0 auto 71px;
    padding: 0;
  `};

`;


export const P = styled.p`
  height: 100%;	
  margin: 0 auto 6.5625rem;
  color: #000000;	
  font-family: "TT Norms", sans-serif;	
  font-size: 1.875em;	
  font-weight: 500;	
  line-height: 1.2;	
  text-align: center;

  ${MEDIA.TABLET`
    display: block;
    max-width: 100%;
    height: 180px;
    color: #000000;	
    font-size: 20px;	
    font-weight: 500;	
    line-height: 30px;	
    text-align: center;
  `};

`;