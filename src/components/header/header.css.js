import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3.3125rem;
  max-width: 80%;
  align-items: center;
  padding: 0.90625rem 4rem;
  height: 6.25rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  img {
    max-height: 3rem;
  }

  ${MEDIA.TABLET`
    padding: 0 0 0 8px;
    margin: 0 0 52px 0;
    width: 50%;
  `};
`;
