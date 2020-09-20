import React, { Component } from "react";

import { Link } from "react-router-dom";

import { LoginFormStyled } from "./styled-components/Form.Login.style";

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
      <LoginFormStyled>
        <h2 class="login-subheader large">Zaloguj się</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="mail">
            <span className="label-text"> E-mail</span>
            <input
              type="mail"
              name="mail"
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

          <input type="submit" value="Zaloguj się" />
        </form>
        <h2 class="login-subheader">
          Jeśli nie posiadasz konta, <Link to="/register">zarejestruj się</Link>
        </h2>
      </LoginFormStyled>
    );
  }
}

export default LoginForm;
