import styled from "styled-components";
import MEDIA from "helpers/mediaTemplates";

export const Container = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;
  width: 70%;
  margin: 4.125em 12% 0;

  ${MEDIA.TABLET`
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
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
    flex: 1 40%;

    h2 {
      height: 47px;
      font-size: 40px;
      font-weight: bold;
      line-height: 47px;
      margin: 0;
      padding: 0;
    }

    p {
      height: 30px;
      font-size: 20px;
      font-weight: bold;
      line-height: 30px;
      margin-bottom: 33px;;
      padding: 0;
    }
  `};
`;
