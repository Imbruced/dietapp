import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuStyled = styled.div`
  background-color: #fff;
  position: fixed;
  width: 60%;
  height: 100%;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-80%")};
  transition: 0.2s;
  z-index: 998;
  .menu-list {
    list-style: none;
    margin: 20vh 5vw;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2vh 0;
    padding: 1vh 3vw;
    font-weight: bold;
    font-family: sans-serif;
    width: 90%;
    height: 36px;
    background-color: #ffffff;
    border-radius: 10px;
    color: #707070;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Menu = ({ isOpen, click }) => {
  return (
    <MenuStyled open={isOpen}>
      <nav className="menu-list">
        <li className="menu-item">
          <NavLink onClick={click} to="/search">
            Dodaj Nowy
          </NavLink>
        </li>
        <li className="menu-item">Mój dzienniczek</li>
        <li className="menu-item">Dodaj do bazy</li>
        <li className="menu-item">Moje konto</li>
        <li className="menu-item">Ustawienia</li>
        <li className="menu-item">O aplikacji</li>
      </nav>
    </MenuStyled>
  );
};

export default Menu;
