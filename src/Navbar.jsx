import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #ffffff;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #000000;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4f4f4f;
  }

  &.active {
    font-weight: bold;
    color: #4f4f4f;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <NavItem exact to="/">
          Home
        </NavItem>
        <NavItem to="/owner">Owner</NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
