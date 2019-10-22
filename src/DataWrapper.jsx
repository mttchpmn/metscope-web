import React from "react";

export const DataContext = React.createContext();

export default class DataWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.updateProp = (prop, value) => {
      this.setState({ [prop]: value });
    };

    this.getAreaList = () => {
      const nameLookup = {
        cy: "Clyde",
        fd: "Fiords",
        ge: "Gore",
        al: "Alps",
        ww: "Windward"
      };

      const result = [];
      for (const code of Object.keys(nameLookup)) {
        if (this.state[code]) result.push(nameLookup[code]);
      }

      return result;
    };

    this.state = {
      updateProp: this.updateProp,
      getAreaList: this.getAreaList,

      userIsLoggedIn: false,
      userEmail: "",
      user: {},
      userToken: "",

      cy: false,
      fd: false,
      ge: false,
      al: false,
      ww: false
    };
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
