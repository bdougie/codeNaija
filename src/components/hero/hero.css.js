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

  #date{
    height: 19px;
    width: 228px;
    color: #362B54;
    font-size: 1rem;
    font-weight: bold;
    line-height: 19px; 
  }

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    background-image: none;
    img {
      margin: 16px 0;
    }
  `};
`;

