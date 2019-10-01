import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 2rem 4rem;
  max-width: 94%;
  width: 100%;
  margin: auto;
  background-image: ${props => (`url(${props.image})`)};
  background-position: center;
  background-repeat: no-repeat;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    img {
      margin: 16px 0;
    }
  `};
`;

