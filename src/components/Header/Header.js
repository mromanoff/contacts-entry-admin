import './Header.css';
import LogoImage from './header-logo.png';

import React, {Component} from 'react';
import {observer} from 'mobx-react';


// const Header = observer(({store}) =>
//   <header className="Header">
//     <h1>Romanoff.io {store.contactsCount}</h1>
//   </header>
// );

@observer(['store'])
class Header extends Component {
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
      </header>
    );
  }
}

export default Header;
