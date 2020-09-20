import React, { Component } from "react";
import { Link } from "react-router-dom";

import { LoginFormStyled } from "./styled-components/Form.Register.style";

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
      <LoginFormStyled>
        <h2 class="login-subheader large">Zerejestruj się</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <span className="label-text"> Imię</span>
            <input
              name="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="surname">
            <span className="label-text"> Nazwisko</span>
            <input
              name="surname"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="mail">
            <span className="label-text"> E-mail</span>
            <input
              name="mail"
              type="mail"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            <span className="label-text"> Hasło</span>
            <input
              name="password"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="re-password">
            {" "}
            <span className="label-text"> Powtórz hasło</span>
            <input
              name="re-password"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input class="submit" type="submit" value="Załóż konto" />
        </form>
        <h2 class="login-subheader">
          Jeśli posiadasz konto, <Link to="/login">zaloguj się</Link>
        </h2>
      </LoginFormStyled>
    );
  }
}

export default RegisterForm;
