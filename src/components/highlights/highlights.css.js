import styled from "styled-components";
import MEDIA from "helpers/mediaTemplates";

export const Container = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;
  padding: 3rem 4rem;
  width: 80%;
  margin: auto;

  ${MEDIA.TABLET`
  text-align: center;
    display: flex;
    flex-direction: column;
  `};
`;

export const Item = styled.div`
  padding: 4px;
  width: 25%;
  text-align: center;
  h2 {
    font-size: 3.5rem !important;
    margin-bottom: 4px;
  }
  p {
    font-size: 1.2rem !important;
  }

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 2rem !important;
      margin-bottom: 4px;
    }
  `};
`;
