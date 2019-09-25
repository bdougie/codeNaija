import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
  text-align: center;
`;

export const Copy = styled.p`
  color: #757575;
  line-height: 1.5;
  font-size: 1.4rem;
  margin: 0 2rem 2rem;
  text-align: center;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
