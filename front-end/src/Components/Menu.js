import React from "react";
import { StyledMenu } from "./styled-components/Menu.style";
import { StyledButton } from "./styled-components/Button.style";
import { NavLink } from "react-router-dom";

const Menu = ({ isOpen, click }) => {
  const menuItems = [
    "Dodaj Nowy",
    "Mój dzienniczek",
    "Dodaj do bazy",
    "Moje konto",
    "Ustawienia",
    "O aplikacji",
  ];
  const menuItemsGenerator = menuItems.map((item) => (
    <StyledButton menuButton className="menu-item">
      <NavLink onClick={click} to="/search">
        {item}
      </NavLink>
    </StyledButton>
  ));
  return (
    <StyledMenu open={isOpen}>
      <div className="menu-list">{menuItemsGenerator}</div>
    </StyledMenu>
  );
};

export default Menu;
