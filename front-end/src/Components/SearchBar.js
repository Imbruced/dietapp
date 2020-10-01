import React from "react";
import { StyledPrimaryBackgroundWrapper } from "./styled-components/PrimaryBackgroundWrapper.style";
import { StyledInput } from "./styled-components/Input.style";

const SearchBar = (props) => {
  return (
    <StyledPrimaryBackgroundWrapper>
      <form>
        <StyledInput
          type="text"
          value={props.value}
          onChange={props.changeHandler}
          placeholder="Wpisz nazwę produktu"
        />
      </form>
    </StyledPrimaryBackgroundWrapper>
  );
};

export default SearchBar;
