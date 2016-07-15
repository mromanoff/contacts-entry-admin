import './Header.css';
import LogoImage from './header-logo.png';

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Button from '../Button';

@observer(['store'])
class Header extends Component {
  constructor(props) {
    super(props);
    const {store} = props;
    this.addContact = store.addContact.bind(store);
  }


  render() {
    let {store: {contactsCount}} = this.props;

    return (
      <header className="Header u-flex u-flexRow u-flexAlignItemsCenter" role="banner">
        <h1 className="Header-logo">
          <a href="/">
            <img className="Header-logoImage" src={LogoImage} alt="romanoff.io" />
          </a>
        </h1>
        <div className="u-flexGrow1"></div>
        <div className="Header-item">Total: {contactsCount}</div>
        <div className="Header-item">
          <Button label="Add Test" className="Button Button--primary" handleAction={this.addContact}/>
        </div>
      </header>
    );
  }
}

export default Header;
