import React, { Component } from "react";
import "./style/App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Layout/Home";
import Search from "./Layout/Search";
import Product from "./Layout/Product";
import Hamburger from "./Components/Hamburger";
import Menu from "./Components/Menu";

const GlobalStyle = createGlobalStyle`
      body{
        overflow-x: hidden;
        width:100vw;
}

    body, h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
        font-family: "Charter";
        font-weight: 100;
        font-style: italic;
        color: #323232;
    }
    *, *::before, *::after{
        box-sizing: border-box;   
        margin: 0;
        padding: 0; 
    }
    *:focus {
    outline: none;
}
a{    text-decoration: none;}
`;

class App extends Component {
  state = {
    isMenuVisible: false,
  };

  menuButtonClickHandler = () => {
    const isMenuVisible = !this.state.isMenuVisible;
    this.setState({
      isMenuVisible,
    });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Menu
            isOpen={this.state.isMenuVisible}
            click={this.menuButtonClickHandler}
          />
          <Hamburger
            click={this.menuButtonClickHandler}
            isOpen={this.state.isMenuVisible}
          />
          <Switch>
            <Route path="/" exact>
              <Home
                click={this.menuButtonClickHandler}
                isOpen={this.state.isMenuVisible}
              />
            </Route>
            <Route path="/search">
              <Search
                click={this.menuButtonClickHandler}
                isOpen={this.state.isMenuVisible}
              />
            </Route>
            <Route path="/product">
              <Product
                click={this.menuButtonClickHandler}
                isOpen={this.state.isMenuVisible}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
