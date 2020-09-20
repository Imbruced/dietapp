import React, { Component } from "react";
import { SearchBarStyled } from "./styled-components/SearchBar.style";

const SearchBar = (props) => {
  return (
    <SearchBarStyled>
      <form>
        <input
          type="text"
          value={props.value}
          onChange={props.changeHandler}
          placeholder="Wpisz nazwę produktu"
        />
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
