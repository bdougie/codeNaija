import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  height: 247px;
  max-width: 100%;
  margin: auto;
  color: white;
  background-color: #362b54;
  margin-bottom: 105px;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    text-align: cener;
  `};
`;

