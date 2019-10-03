import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 0 4rem;
  margin: 0 auto 4.8125rem;
  align-items: center;
  grid-gap: 0;
  height: 304px;

  #separator {
    width: 1px;
    height: 80%;
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

    figure {
      margin-bottom: 35px;
      text-align: center;
    }
  `};
`;
