import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    align-items: baseline;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      

      & + li {
        margin-left: 2rem;
      }

      a{
        color: #060506;
      }
    }
  }

  ${MEDIA.TABLET`
    ul {
      display: none;
    }
  `};
`;
