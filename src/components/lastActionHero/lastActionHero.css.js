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
    font-size: 12px;
    text-transform: uppercase;
  }

  em {
    color: #006ec6;
  }

  p {
    font-size: 12px;
  }

  h2 {
    font-size: 28px !important;
    margin: 4px 0;
    text-align: left;
  }

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;

    img {
      margin: 16px 0;
    }
  `};
`;
