import React from "react";


export const DataContext = React.createContext();

export default class DataWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [],
      test: 'foo'
    };
  }

  render() {
    return(
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}