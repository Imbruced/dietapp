import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import ResultList from "../Components/ResultList";
import Button from "../Components/Button";

import backIco from "../assets/svg/backIco.svg";

class Search extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);
  };
  // componentDidUpdate() {
  //   this.handleChange = (event) => {
  //     this.setState({ value: event.target.value });
  //     console.log(this.state.value);
  //   };
  // }

  render() {
    return (
      <>
        <Logo />
        <SearchBar value={this.state.value} changeHandler={this.handleChange} />
        <ResultList />
        <Link to="/">
          <Button txt="Wstecz" img={backIco} />
        </Link>
      </>
    );
  }
}

export default Search;
