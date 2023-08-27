import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid green;
  background-color: orange;
  border-radius: 4px;
  text-decoration: none;
  color: green;
  font-weight: 500;

  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid green;
  background-color: orange;
  border-radius: 4px;
  text-decoration: none;
  color: green;
  font-weight: 500;

  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus {
    color: white;
    background-color: orangered;
  }
`;