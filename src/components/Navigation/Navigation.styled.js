import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: ${p => p.theme.colors.link};
  font-size: 18px;

  &.active {
    color: ${p => p.theme.colors.activeLink};
  }
`;
