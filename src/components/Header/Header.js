/**
 *
 * Header.react.js
 *
 */

import React, {Component} from 'react';
import {observer} from 'mobx-react';
//import './Header.css';


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
      <header className="Header">
        <h1>Romanoff.io {contactsCount}</h1>
      </header>
    );
  }
}

export default Header;
