import React from "react";
import { Component } from "react";

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
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="mail"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Mail"
          />
          <input
            type="password"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Hasło"
          />

          <input type="submit" value="Wyślij" />
        </form>
      </>
    );
  }
}

export default LoginForm;
