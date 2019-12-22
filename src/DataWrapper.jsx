import React from "react";

export const DataContext = React.createContext();

export default class DataWrapper extends React.Component {
  constructor(props) {
    super(props);

    // Function to update context from nested components
    this.updateProp = (prop, value) => {
      this.setState({ [prop]: value });
    };

    // Return human readable list of selected areas
    this.getAreaList = () => {
      // Translate area codes into human readable format
      const nameLookup = {
        fn: "Far North",
        ta: "Tamaki",
        tk: "Te Kuiti",
        ed: "Edgecumbe",
        cp: "Central Plateau",
        mh: "Mahia",
        sa: "Sanson",
        dv: "Dannevirke",
        st: "Straits",
        tn: "Tasman",
        ka: "Kaikouras",
        ww: "Windward",
        al: "Alps",
        pl: "Plains",
        cy: "Clyde",
        fd: "Fiords",
        ge: "Gore"
      };

      const result = [];
      for (const code of Object.keys(nameLookup)) {
        if (this.state[code]) result.push(nameLookup[code]);
      }

      return result;
    };

    this.state = {
      // Functions
      updateProp: this.updateProp,
      getAreaList: this.getAreaList,

      // User data
      userIsLoggedIn: this.getProp("userIsLoggedIn", false),
      userToken: this.getProp("userToken"),
      userFirstName: this.getProp("userFirstName"),
      userLastName: this.getProp("userLastName"),
      userEmail: this.getProp("userEmail"),

      // Data utilities
      loading: false, // Are we in the process of fetching from API
      dataLoaded: false, // Do we have data fetched and saved already
      areasSet: false,
      webcams: {},
      brief: {},
      metvuw: [],

      // Area selection
      fn: false,
      ta: false,
      tk: false,
      ed: false,
      cp: false,
      mh: false,
      sa: false,
      dv: false,
      st: false,
      tn: false,
      ka: false,
      ww: false,
      al: false,
      pl: false,
      cy: false,
      fd: false,
      ge: false
    };
  }

  // Fetch data from localStorage
  getProp(propName, defaultValue = null) {
    return localStorage.getItem(propName) || defaultValue;
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
