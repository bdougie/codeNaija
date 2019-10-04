import styled from "styled-components";
import MEDIA from "helpers/mediaTemplates";

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
  padding: 2rem 4rem;
  max-width: 80%;
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

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
    max-width: 100%;
    width: 100%
    margin: 0;
    text-align: center;

    img {
      margin: 16px 0;
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
