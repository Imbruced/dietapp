import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./style/style.css";

import Home from "./Templates/Home/Home";
import Search from "./Templates/Search/Search";
import Product from "./Templates/Product/Product";
import Login from "./Templates/Login/Login";
import Register from "./Templates/Register/Register";
import Diary from "./Templates/Diary/Diary";

import Hamburger from "./Components/Hamburger";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

import { GlobalStyle } from "./App.style";
import { WrapperStyled } from "./App.style";
import { DesktopWrapper } from "./App.style";

class App extends Component {
  state = {
    value: "",
    isMenuVisible: false,
    data: [],
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://localhost:5050/products?name=${this.state.value}`;

      fetch(API, {
        method: "GET",
        // headers: "application/json",
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data: data,
          });
        })
        .catch((err) => console.log(err));
    }
  }

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
          <DesktopWrapper>
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
                    value={this.state.value}
                    changeHandler={this.handleChange}
                    result={this.state.data}
                  />
                </Route>
                <Route path="/product">
                  <Product
                    click={this.menuButtonClickHandler}
                    isOpen={this.state.isMenuVisible}
                    value={this.state.value}
                    changeHandler={this.handleChange}
                    result={this.state.data}
                  />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/my-diary">
                  <Diary />
                </Route>
              </Switch>
              {/* <Footer /> */}
            </WrapperStyled>
          </DesktopWrapper>
        </Router>
      </>
    );
  }
}

export default App;
