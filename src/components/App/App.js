import './App.css';

import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Header from '../Header';
import Footer from '../Footer';
import ContactList from '../ContactList';
import ContactsStore from '../../stores/ContactsStore';

const store = new ContactsStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <main className="Main">
            <h1 className="Main-title">Contacts Entries</h1>
            <ContactList/>
          </main>
          <Footer />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default App;
