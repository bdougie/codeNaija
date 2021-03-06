import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  justify-items: center;
  padding: 0 4rem;
  margin: 2rem 0;
  align-items: center;
  grid-gap: 30px;


  ${MEDIA.TABLET`
    display: block;
    padding: 0;
    figure {
      margin-bottom: 40px;
      text-align: center;
    }
  `};
`;
