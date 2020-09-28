import React, { Component } from "react";
import "./style/style.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledTemplateWrapper, StyledAppWrapper } from "./App.style";
import { theme, GlobalStyle } from "./utils/theme";
import { path } from "./utils/paths";
import Home from "./Templates/Home/Home";
import Search from "./Templates/Search/Search";
import Product from "./Templates/Product/Product";
import Login from "./Templates/Login/Login";
import Register from "./Templates/Register/Register";
import Diary from "./Templates/Diary/Diary";
import Hamburger from "./Components/Hamburger";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

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
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <StyledAppWrapper>
              <Menu
                isOpen={this.state.isMenuVisible}
                click={this.menuButtonClickHandler}
              />
              <Hamburger
                click={this.menuButtonClickHandler}
                isOpen={this.state.isMenuVisible}
              />
              <StyledTemplateWrapper>
                <Switch>
                  <Route path={path.home} exact>
                    <Home
                      click={this.menuButtonClickHandler}
                      isOpen={this.state.isMenuVisible}
                    />
                  </Route>
                  <Route path={path.search}>
                    <Search
                      click={this.menuButtonClickHandler}
                      isOpen={this.state.isMenuVisible}
                    />
                  </Route>
                  <Route path={path.product}>
                    <Product
                      click={this.menuButtonClickHandler}
                      isOpen={this.state.isMenuVisible}
                    />
                  </Route>
                  <Route path={path.login}>
                    <Login />
                  </Route>
                  <Route path={path.register}>
                    <Register />
                  </Route>
                  <Route path={path.diary}>
                    <Diary />
                  </Route>
                </Switch>
                <Footer />
              </StyledTemplateWrapper>
            </StyledAppWrapper>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
