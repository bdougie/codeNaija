import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 0;
  max-width: 100%;
  margin: auto;
  color: white;
  background-color: #362b54;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    text-align: cener;
  `};
`;

