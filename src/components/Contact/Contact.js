import './Contact.css';

import React, {PropTypes, Component} from 'react';
import {observer} from 'mobx-react';
import Button from '../Button';

@observer(['store'])
class Contact extends Component {

  constructor(props) {
    super(props);

    const {store} = props;
    this.addContact = store.addContact.bind(store);
    this.editContact = store.editContact.bind(store, props.contact);
    this.deleteContact = store.deleteContact.bind(store, props.contact);
  }

  render() {
    const {contact: {firstName, lastName, email}} = this.props;

    return (
      <li className="Contact u-flex u-flexAlignItemsCenter">
        <div className="Contact-item"><strong>Name:</strong> {firstName} {lastName}</div>
        <div className="Contact-item"><strong>email:</strong> {email}</div>
        <div className="Contact-wrapButton u-flexExpandLeft">
          <Button label="Edit" className="Button Button--default Button--small" handleAction={this.editContact}/>
          <Button label="Delete" className="Button Button--danger Button--small" handleAction={this.deleteContact}/>
        </div>
      </li>
    );
  }

}


Contact.propTypes = {
  contact: PropTypes.object.isRequired
};


export default Contact;
