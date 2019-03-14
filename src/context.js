import React, { Component } from "react";
import axios from "axios";
import Contacts from "../src";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contact: state.contact.filter(
          contacts => contacts.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contact: [action.payload, ...state.contact]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contact: state.contact.map(contacts =>
          contacts.id === action.payload.id
            ? (contacts = action.payload)
            : contacts
        )
      };

    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    contact: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({ contact: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
