import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 80%;
  align-items: baseline;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
