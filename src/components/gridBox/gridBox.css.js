import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  justify-items: center;
  padding: 0 4rem;
  margin: 3rem 0;
  align-items: center;
  grid-gap: 0;


  ${MEDIA.TABLET`
    display: block;
    padding: 0px;
    figure {
      margin-bottom: 35px;
      text-align: center;
    }
  `};
`;
