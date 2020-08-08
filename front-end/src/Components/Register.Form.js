import React from "react";
import { Component } from "react";

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
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Imię"
          />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Nazwisko"
          />
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

export default RegisterForm;
