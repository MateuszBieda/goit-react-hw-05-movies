import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;
export const Header = styled.header`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    display: flex;
    margin-bottom: 30px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  color: black;
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
text-decoration: none;


  &.active {
    color: white;
    background-color: orange;
    text-decoration: underline white 2px;
  
  }
`;
