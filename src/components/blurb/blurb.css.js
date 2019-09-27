import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 100%;
  margin: auto;

  ${MEDIA.TABLET`
    display: block;
    max-width: 100%;
  `};

`;


export const Paragraph = styled.p`
  line-height: 1.5;
  max-width: 45%;

  ${MEDIA.TABLET`
    display: block;
    max-width: 100%;
  `};
`
