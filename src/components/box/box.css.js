import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 80%;
  margin: auto;

  p#footer{
    position: absolute;
    padding: 3.125em 0 1.250em 11.500em;
    left: 0;
    background-color: #362B54;
    color: #FFFFFF;
    width: 100vw;
    height: 100px;
    display: block;
    text-align: left;
    font-size: 1.250em;
    line-height: 1.438em;
  }

  ${MEDIA.TABLET`
    max-width: 90%;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    p#footer{
      padding: 33px 0 29px 17px;
      height: 19px;
      font-size: 1.1em;
      line-height: 19px;
    }
  `};
`;
