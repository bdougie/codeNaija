import styled from "styled-components";
import MEDIA from "helpers/mediaTemplates";

export const Container = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;
  width: 70%;
  margin: 4.125em 12% 0;

  ${MEDIA.TABLET`
  text-align: center;
    display: flex;
    flex-direction: column;
  `};
`;

export const Item = styled.div`
  padding: 0.25em;
  width: 25%;
  text-align: center;
  h2 {
    height: 4.4375rem;
    line-height: 4.4375rem;
    font-size: 3.75em;
    font-weight: bold;
    margin-bottom: 0.5625em;
  }
  p {
    height: 1.875rem;
    line-height: 1.875rem;
    font-size: 1.25em;
    font-weight: bold;
  }

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 2rem !important;
    }
  `};
`;
