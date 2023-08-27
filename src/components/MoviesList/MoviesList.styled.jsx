import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  color: black;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  line-height: auto;
  width: max-content;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: brown;
  transition: font-size 1s linear;

  &:hover {
    color: red;
    text-decoration: underline red;
    font-size: 25px;
  }
`;

export const MovieName = styled.p`
  font-weight: 400;
  margin-bottom: 5px;
  margin-top: 5px;
`;
