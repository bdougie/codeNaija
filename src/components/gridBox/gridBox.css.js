import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  justify-items: center;
  padding: 0 4rem;
  margin: 0 auto 4.8125rem;
  align-items: center;
  grid-gap: 0;
  height: 304px;

  #separator {
    width: 1px;
    height: 40%;
    background: #3359df;
  }

  .gridH2{
    font-size: 2em;
    line-height: 2.625em;
  }

  ${MEDIA.TABLET`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0px;
    height: fit-content;
    margin-bottom: 81px;

    figure {
      margin-bottom: 35px;
      text-align: center;
    }

    .gridH2 {
      height: 30px;
      color: #060506;
      font-size: 25px;
      font-weight: bold;
      line-height: 30px;
      margin-bottom: 35px;
    }
  `};
`;
