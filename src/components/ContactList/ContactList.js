import './ContactList.css';

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Contact from '../Contact';


@observer(['store'])
class ContactList extends Component {

  render() {
    let {store: {contacts}} = this.props;

    let contactNodes = contacts.map(function (contact) {
      return (
        <Contact key={contact._id.$oid} contact={contact}/>
      );
    });

    return (
      <ul className="ContactList">
        {contactNodes}
      </ul>
    );
  }
}

export default ContactList;
