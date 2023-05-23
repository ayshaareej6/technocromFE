import React, { Component } from "react";
import AxiosInstance from "../helper/AxiosInstance";

const MainContext = React.createContext();

class MainProvider extends Component {
  setLoginPopup = (visibility) => {
    this.setState({ loginPopup: visibility });
  };

  setSearchPopup = (visibility) => {
    this.setState({ searchPopup: visibility });
  };

  state = {
    LoginedIn: false,
    userData: {},
    loginPopup: false,
    searchPopup: false,
  };

  CheckLogin = () => {
    let sessionData = JSON.parse(window.sessionStorage.getItem("sessionData"));
    if (sessionData !== null) {
      if (sessionData.token) {
        this.setState({
          LoginedIn: true,
          userData: sessionData,
        });
        return true;
      } else {
        this.setState({
          LoginedIn: false,
        });
        return false;
      }
    } else {
      this.setState({
        LoginedIn: false,
      });
      return false;
    }
  };

  SignOut = () => {
    AxiosInstance.post("auth/logout").then(
      (res) => {
        window.sessionStorage.removeItem("sessionData");
        this.CheckLogin();
      },
      (err) => {
        console.log(err);
      }
    );
  };

  UNSAFE_componentWillMount() {
    this.CheckLogin();
  }

  render() {
    return (
      <>
        <MainContext.Provider
          value={{
            state: this.state,
            CheckLogin: this.CheckLogin,
            setLoginPopup: this.setLoginPopup,
            setSearchPopup: this.setSearchPopup,
            SignOut: this.SignOut,
          }}
        >
          {this.props.children}
        </MainContext.Provider>
      </>
    );
  }
}

export { MainContext, MainProvider };
