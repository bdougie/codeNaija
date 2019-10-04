import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: auto;

  ${MEDIA.TABLET`
    display: block;
    max-width: 100%;
    padding-bottom: 93px;
  `};

`;


export const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 1.25em;
  width: 21.0625em;

  ${MEDIA.TABLET`
    text-align: left;
    color: #2B2B2B;
    font-size: 20px;
    line-height: 31px;
    display: block;
    max-width: 100%;
    margin-bottom: 32px;
  `};
`
