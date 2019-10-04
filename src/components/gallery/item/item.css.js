import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  height: 1.875rem;
  font-size: 1.5625em;
  font-weight: 500;
  margin: 0 auto 0.8125em;
  text-align: center;

  ${MEDIA.TABLET`
    margin-bottom: 13px;
    height: 30px;	
    color: #362B54;
    font-size: 25px;	
    font-weight: bold;	
    line-height: 30px;	
    text-align: center;
  `};
`;

export const Copy = styled.p`
  color: #2B2B2B;
  line-height: 1.875em;
  font-size: 1.25em;
  text-align: center;
  height: 5.625rem;
  width: 100%;			

  ${MEDIA.TABLET`
    margin-bottom: 60px;
    height: 90px;	
    color: #2B2B2B;	
    font-size: 20px;	
    line-height: 30px;	
    text-align: center;
  `};
`;

export const Figure = styled.figure`
  display: block;
  margin: 0 auto 6.5625em;
  text-align: center;

  div {
    height: 18.6875em;
    margin-bottom: 2.75em;
  }

  img {
    display: block;
    height: 100%;
  }

  figcaption {
    height: 8.3125em;
    margin-bottom: 0.8125em;
  }
  ${MEDIA.TABLET`
    img {
      display: block;
      height: 100%;
    }

    figcaption {
      margin-top: 35px;
    }

    figcaption 
  `};
`;
