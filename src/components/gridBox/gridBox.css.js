import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 0 4rem;
  margin: 3rem 0;
  align-items: center;
  grid-gap: 0;

  #separator {
    width: 1px;
    height: 100%;
    background: #3359df;
  }

  #separator::after{
    display: block;
    content: "";
    position: relative;
    left: -5px;
    top: 90%;
    width: 10px;
    height: 10%;
    border-radius: 50%;
    background-color: #ffaf30;
  }

  ${MEDIA.TABLET`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0px;

    figure {
      margin-bottom: 35px;
      text-align: center;
    }
  `};
`;
