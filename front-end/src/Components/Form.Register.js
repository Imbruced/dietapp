import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../utils/device";

import { Link } from "react-router-dom";

const LoginFormStyled = styled.div`
  display: flex;
  height: 100;
  flex-direction: column;
  background-color: #ffffff;
  margin: 15px 0 50px;
  padding: 15px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.laptop} {
    width: 50%;
  }
  h2 {
    background-color: #ffffff;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .login-subheader.large {
    font-size: 25px;
    font-weight: bold;
    margin-top: 0;
    @media ${device.tablet} {
      font-size: 28px;
    }
  }
  .login-subheader {
    text-align: center;
    margin: 15px 0;
    color: #97bf04;
    font-size: 18px;
    font-family: "DIN Alternate";
    @media ${device.tablet} {
      font-size: 22px;
    }
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
    @media ${device.tablet} {
      font-size: 22px;
    }
  }
  input {
    margin: 10px;
    padding: 10px;
    width: 60%;
    max-width: 500px;
    border: none;
    border-radius: 10px;
    color: #97bf04;
    font-family: "Courier";
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    transition: 0.3s;
    @media ${device.tablet} {
      font-size: 26px;
    }
  }
  input:focus {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  }
  .submit {
    display: block;
    margin: 0 auto;
  }
`;

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
