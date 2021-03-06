import styled from "styled-components";
import MEDIA from "helpers/mediaTemplates";

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 4rem 2rem 16.188em;
  max-width: 80%;
  width: 70%;
  margin: 24px auto;
  

  small {
    font-size: 12.8px;
    text-transform: uppercase;
    height: 15px;
    color: #362B54;
    font-weight: bold;
    line-height: 15px; 
  }

  em {
    color: #006ec6;
  }

  p {
    font-size: 12.8px;
  }

  h2 {
    height: 36px
    line-height: 36px;
    font-size: 30px;
    margin: 4px 0;
    text-align: left;
  }

  div:nth-child(1){
    margin-right: 5.813em;
  }

  ${MEDIA.TABLET`
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;
    padding: 0;
    margin: 0;
    text-align: center;
    max-width: 100%;
    width: 100%;

    img {
      margin: 16px 0;
    }

    div:first-child {
      width: 100%;
    }

    div:last-child {
      width: 100%;

      small {
        display: block;
        height: 15px;	
        color: #362B54;	
        font-size: 12.8px;	
        font-weight: bold;	
        line-height: 15px;
        margin-bottom: 6px;
      }

      h2{
        height: 72px;
        width: 60%;
        margin: 0 auto;
        font-size: 30px;
        font-weight: bold;
        line-height: 36px;
        text-align: center;
        margin-bottom: 6px;
      }

      p {	
        height: 15px;	
        font-size: 12.8px;	
        line-height: 15px;
      }

      a {
        display: block;
        margin-bottom: 101px;
      }
    }
  `};
`;
