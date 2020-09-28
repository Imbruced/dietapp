import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledBoard } from "./styled-components/Board.style";
import { StyledSubheader } from "./styled-components/Subheader.style";
import { StyledForm } from "./styled-components/Form.style";
import { StyledInput } from "./styled-components/Input.style";
import { formsData } from "../utils/texts";

class RegisterForm extends Component {
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
          {formsData.registerTxt}
        </StyledSubheader>
        <StyledForm onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <span className="label-text"> {formsData.nameTxt}</span>
            <StyledInput
              name="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              loginInput
            />
          </label>
          <label htmlFor="surname">
            <span className="label-text"> {formsData.surnameTxt}</span>
            <StyledInput
              name="surname"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              loginInput
            />
          </label>
          <label htmlFor="mail">
            <span className="label-text"> {formsData.emailTxt}</span>
            <StyledInput
              name="mail"
              type="mail"
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
            />
          </label>
          <label htmlFor="re-password">
            <span className="label-text"> {formsData.repeatPasswordsTxt}</span>
            <StyledInput
              name="re-password"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
              loginInput
            />
          </label>
          <StyledInput class="submit" type="submit" value="Załóż konto" />
        </StyledForm>
        <StyledSubheader loginSubheader dark normal left>
          {formsData.loginSlogan[0]}
          <Link to="/login">{formsData.loginSlogan[1]}</Link>
        </StyledSubheader>
      </StyledBoard>
    );
  }
}

export default RegisterForm;
