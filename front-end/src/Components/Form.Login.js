import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  h2 {
    background-color: #ffffff;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-subheader.large {
    font-size: 25px;
    font-weight: bold;
    margin-top: 0;
  }
  .login-subheader {
    text-align: center;
    margin: 15px 0;
    color: #97bf04;
    font-size: 18px;
    font-family: "DIN Alternate";
  }
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #97bf04;
    font-size: 18px;
    font-family: "DIN Alternate";
  }
  .label-text {
    display: block;
    width: 40%;
    text-align: right;
  }
  input {
    margin: 15px;
    padding: 10px;
    width: 60%;
    max-width: 500px;
    border: none;
    border-radius: 10px;
    color: #97bf04;
    font-family: "Courier";
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    transition: 0.3s;
  }
  input:focus {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  }
  .submit {
    display: block;
    margin: 0 auto;
  }
`;

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
