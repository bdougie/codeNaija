import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: block;
  height: 100px;
  width: 40%;
  margin: 4rem auto;

  h2{
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  div.section{
    background-color: #FFFFFF !important;
  }
  
  div.time{
    color: #2B2B2B !important;
    font-size: 50px !important;
  }

  div.label{
    color: #006ec6 !important;
  }

  

  ${MEDIA.TABLET`
    height: fit-content;
    width: 100%;
    margin: 0 auto 50px;

    h2{
      font-size: 25px;
    }

    & div:nth-of-type(1){
      flex-direction: column;
    }
  `};
`;
