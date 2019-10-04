import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  max-width: 75%;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '700';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '4rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;
  height: 8.875rem;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
