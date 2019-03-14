import React, { Component } from "react";
import Contacts from "./Contacts";
import { Consumer } from "../../context";
class Contact extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contact } = value;
          // console.log(contact)
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              
              {contact.map(contacts => (
                <Contacts key={contacts.id} contacts={contacts} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
