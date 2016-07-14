import './Contact.css';

import React, {PropTypes, Component} from 'react';
import Button from '../Button';

class Contact extends Component {
  render() {
    const {contact: {firstName, lastName, email}} = this.props;

    return (
      <li className="Contact">
        <div><strong>Name:</strong> {firstName} {lastName}</div>
        <div><strong>email:</strong> {email}</div>
        <div>
          <Button label="Edit"
                  className="Button Button--default Button--small"/>
          <Button label="Delete"
                  className="Button Button--danger Button--small"/>
        </div>
      </li>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // handleAction: PropTypes.func,
  // onChange: PropTypes.func
};


export default Contact;
