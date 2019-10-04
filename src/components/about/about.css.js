import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  background-color: #F5F5F9;
  padding: 51px 10% 5.3125rem;
  margin-bottom: 129px;

  ${MEDIA.TABLET`
    margin: auto;
    flex-direction: column;
    text-align: center;
    padding: 57px % 0;
    margin-bottom: 109px;
  `};
`;

export const AboutHeader = styled.h2`
  font-size: 2.1875em;
  text-align: center;
  color: #362B54;
  line-height: 2.625rem;

  ${MEDIA.TABLET`
    height: 30px;	
    color: #362B54;	
    font-size: 25px;	
    font-weight: bold;	
    line-height: 30px;
    margin-bottom: 41px;	
  `};
`;
