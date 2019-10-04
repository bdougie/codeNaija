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
    height: fit-content
    text-align: center;
    margin-bottom: 77px;
    padding: 75px 0 101px;
  `};
`;

