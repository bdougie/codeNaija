import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;
  font-size: 2rem;
  max-width: 55%;
  margin: auto;
  text-align: center;
  line-height: 1.8;

  ${MEDIA.TABLET`
    display: block;
    max-width: 100%;
  `};

`;
