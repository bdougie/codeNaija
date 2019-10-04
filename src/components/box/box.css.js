import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 80%;
  margin: auto;

  ${MEDIA.TABLET`
    max-width: 90%;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    #footer {
      height: 19px;
      // color: #FFFFFF;
      font-size: 16px;
      line-height: 19px;
    }
  `};
`;
