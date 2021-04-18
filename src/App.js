import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import HomeContainer from "./containers/HomeContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" component={CreateUserContainer} />
          <Route path="/edit/:id" component={EditUserContainer} />
          <Route path="/detail/:id" component={DetailUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
