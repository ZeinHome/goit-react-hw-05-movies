import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  box-shadow: 0px 9px 22px 5px #a1a1a1;
`;

export const HeaderList = styled.ul`
  padding: 20px 10px;
  display: flex;
  list-style: none;
  margin: 0;
`;

export const HeaderListItem = styled.li`
  font-size: 20px;
  font-weight: 700;
  padding: 8px;

  :not(:last-child) {
    margin-right: 25px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: #e2b156;
  }
`;
