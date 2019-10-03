import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 80%;
  margin: auto;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    text-align: center;
  `};
`;
