import React, { Component } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Layout/Home";
import Search from "./Layout/Search";
import Product from "./Layout/Product";
import Login from "./Layout/Login";
import Register from "./Layout/Register";
import MyDiary from "./Layout/MyDiary";

import Hamburger from "./Components/Hamburger";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

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

const WrapperStyled = styled.main`
  display: block;
  position: relative;
  min-height: 100vh;
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
          <WrapperStyled>
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
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
            <Footer />
          </WrapperStyled>
        </Router>
      </>
    );
  }
}

export default App;
