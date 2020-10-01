import React from "react";
import { StyledMenu } from "./styled-components/Menu.style";
import { StyledButton } from "./styled-components/Button.style";
import { NavLink } from "react-router-dom";
import { path } from "../utils/paths";

const Menu = ({ isOpen, click }) => {
  const menuItems = [
    {
      buttonTxt: "Dodaj Nowy",
      path: path.search,
    },
    {
      buttonTxt: "Mój dzienniczek",
      path: path.diary,
    },
    {
      buttonTxt: "Dodaj do bazy",
      path: path.newProduct,
    },
    {
      buttonTxt: "Moje konto",
      path: path.myAcount,
    },
    {
      buttonTxt: "Ustawienia",
      path: path.settings,
    },
    {
      buttonTxt: "O aplikacji",
      path: path.about,
    },
  ];
  const menuItemsGenerator = menuItems.map((item) => (
    <StyledButton menuButton className="menu-item">
      <NavLink onClick={click} to={item.path}>
        {item.buttonTxt}
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
