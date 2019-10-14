import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 100%;
  margin: auto;
  background-color: #362B54;
  padding: 37px 0 40px 0;

  p {
    height: 23px;
    width: 80%;
    margin: 0 auto;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 23px;
  }

  ${MEDIA.TABLET`
    margin: auto;
    display: flex;
    text-align: left;
    padding: 33px 0 29px 17px;

    #footer{
      height: 19px;
      line-height: 19px;
      font-size: 16px;
    }
  `};
`;
