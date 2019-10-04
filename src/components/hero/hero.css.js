import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 1.375rem;
  height: 30.1875em;
  background-image: ${props => (`url(${props.image})`)};
  background-size: cover;
  background-origin: content-box;
  background-position: center 10%;
  background-repeat: no-repeat;

  div:nth-child(1){
    margin-left: 10%;
  }

  div:nth-child(2){
    margin-right: 10%;
  }

  div:nth-child(2) > img {
    height: 32.5rem;
    width: 45.625rem;
  }

  small{
    text-transform: uppercase;
    height: 19px;
    margin-bottom: 9px;
    color: #362B54;
    font-size: 2rem;
    font-weight: bold;
    line-height: 19px; 
  }

  #banner p {
    height: 19px;
    color: #060506;
    font-size: 1.8rem;
    line-height: 19px;
  }

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    background-image: none;
    text-align: center;
    height: fit-content;
    margin-bottom: 81px;

    div:nth-child(2) > img {
      margin: 35px 0 0 0;
      height: 260px;
      width: 374px;
    }

    small{
      height: 16px;	
      width: 200px;	
      color: #362B54;	
      font-size: 14px;
      font-weight: bold;	
      line-height: 16px;
    }

    div:nth-child(1){
      margin: 0;
    }

    div:nth-child(2){
      margin-right: 0;
    }

    #banner p {
      text-align: center;
      height: 16px;
      color: #060506;
      font-size: 14px;
      line-height: 16px;
    }

    #banner a {
      margin: 0;
    }
  `};
`;


export const H1 = styled.h1 `
  height: 160px;
  width: 500px;
  font-size: 65px;
  font-weight: bold;
  line-height: 80px;
  margin-bottom: 1rem;

  ${MEDIA.TABLET`
    height: 94px;	
    font-size: 40px;	
    font-weight: bold;	
    line-height: 47px;	
    text-align: center;
    margin-bottom: 9px;

    em {
      display: block;
      width: 100%;
    }
  `};
`;
