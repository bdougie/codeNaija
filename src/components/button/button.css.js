import styled from "styled-components";

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #F5A623;
  border: none;
  color: #000;
  border: solid #F5A623;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 2rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;

