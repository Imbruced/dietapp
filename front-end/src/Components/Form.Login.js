import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledForm } from "./styled-components/Form.style";
import { StyledBoard } from "./styled-components/Board.style";
import { StyledInput } from "./styled-components/Input.style";

import { StyledSubheader } from "./styled-components/Subheader.style";
import { formsData } from "../utils/texts";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Podano następujące imię: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <StyledBoard>
        <StyledSubheader loginSubheader large dark>
          {formsData.logInTxt}
        </StyledSubheader>
        <StyledForm onSubmit={this.handleSubmit}>
          <label htmlFor="mail">
            <span className="label-text"> {formsData.emailTxt}</span>
            <StyledInput
              type="mail"
              name="mail"
              value={this.state.value}
              onChange={this.handleChange}
              loginInput
            />
          </label>
          <label htmlFor="password">
            <span className="label-text"> {formsData.passwordTxt}</span>
            <StyledInput
              name="password"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
              loginInput
            ></StyledInput>
          </label>
          <StyledInput type="submit" value="Zaloguj się" />
        </StyledForm>
        <StyledSubheader loginSubheader left dark normal>
          {formsData.registerSlogan[0]}
          <Link to="/register">{formsData.registerSlogan[1]}</Link>
        </StyledSubheader>
      </StyledBoard>
    );
  }
}

export default LoginForm;
