import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 2rem 4rem;
  max-width: 80%;
  margin: auto;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    img {
      margin: 16px 0;
    }
  `};
`;

