import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/redux-state-management/store";
import Routes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import AuthContextProvider from "./containers/AuthContext";
//Entry point for the App

class App extends Component {
  render() {
    document.title = "Big Business App";
    document.getElementsByTagName("META")[2].content =
      "Big business is World’s first and fastest-growing ecosystem for trustworthy businesses. Manage all your business finances and operations through big business applications and get a B score to join our ecosystem of trustworthy businesses.";
    return (
      <Provider store={store}>
        <React.Fragment>
          <AuthContextProvider>
            <main id="app">
              <Routes />
            </main>
          </AuthContextProvider>
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;
