import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Bar,
  BurgerMenu,
  Container,
  NavItem,
  NavList,
  StyledLink,
} from "../../styles/header";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <Bar open={open} />
        <Bar open={open} />
        <Bar open={open} />
      </BurgerMenu>
      <NavList open={open}>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/shop">Shop</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/profile">Profile</StyledLink>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Header;
