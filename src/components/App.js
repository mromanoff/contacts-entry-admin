import React, {Component} from 'react';
import {observer, Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import ContactsStore from '../stores/ContactsStore';
const store = new ContactsStore();

import Header from './Header';
import Footer from './Footer';
import ContactsList from './ContactsList';

class App extends Component {
  render() {
    console.log('store', store);

    return (
      <Provider store={store}>
        <div style={style}>
          <Header />
          <main>
            <ContactsList/>
          </main>
          <Footer />
          <DevTools />
        </div>
      </Provider>
    );
  };
}

export default App;

let style = {
  color: 'black',
  backgroundColor: 'Gainsboro'
};
