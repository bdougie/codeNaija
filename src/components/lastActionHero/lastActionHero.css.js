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

    img {
      margin: 16px 0;
    }
  `};
`;
