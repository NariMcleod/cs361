import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/add" activeStyle>
            Add an employee
          </NavLink>
          <NavLink to="/edit" activeStyle>
            Edit 
          </NavLink>
          <NavLink to="/delete" activeStyle>
            Remove 
          </NavLink>
          <NavLink to="/help" activeStyle>
            Manual/Help
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;