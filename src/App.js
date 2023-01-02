import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Main } from "./layout/Main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export { App };
