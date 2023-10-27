import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  background: #000;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

export interface NavListProps {
  open: boolean;
}

export const NavList = styled.ul<NavListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

export const NavItem = styled.li`
  margin: 5px 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export interface BurgerMenuProps {
  open: boolean;
}

export const BurgerMenu = styled.div<BurgerMenuProps>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bar = styled.div<BurgerMenuProps>`
  height: 2px;
  width: 25px;
  background-color: #333;
  margin: 3px 0;
  transition: 0.4s;
  
  :nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)')};
  }
  
  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
  
  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)')};
  }
`;