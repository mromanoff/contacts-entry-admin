import {observable, computed, action, autorun, useStrict} from 'mobx';
import 'whatwg-fetch';
useStrict(false);

const API = {
  url: 'https://api.mongolab.com',
  version: 1,
  database: 'romanoff-io',
  collection: 'contact',
  key: 'oOfu-DRx8fwXi9VifYrwAwgJGCBXT1_n'
};

let findAll = () =>
  `${API.url}/api/${API.version}/databases/${API.database}/collections/${API.collection}?apiKey=${API.key}`;


let find = (_id) =>
  `${API.url}/api/${API.version}/databases/${API.database}/collections/${API.collection}/${_id.$oid}?apiKey=${API.key}`;


class ContactsStore {
  constructor() {
    autorun(() => {
      this.loadContacts();
    });
  }

  @observable contacts = [];

  @computed get contactsCount() {
    return this.contacts.length;
  }

  @action
  loadContacts() {
    fetch(findAll())
      .then(response=>response.json())
      .then(data=>this.contacts = data);
  }

  @action
  addContact() {

    const init = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: 'TEST',
        lastName: 'USER',
        email: 'test.email@test.com'
      })
    };

    fetch(findAll(), init)
      .then(response => response.json())
      .then((contact) => {
        console.warn(`Successfully added contact!`);
        this.loadContacts();
      })
      .catch(function (err) {
        console.error('There has been a problem with your fetch operation: ', err.message)
      });
  }

  @action
  editContact(contact) {
    console.debug('edit contact', contact);
  }

  @action
  deleteContact(contact) {
    const init = {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache'
    };

    fetch(find(contact._id), init)
      .then(response => response.json())
      .then((contact) => {
        console.warn(`Successfully deleted contact! ${contact._id.$oid}`);
        this.loadContacts();
      })
      .catch(function (err) {
        console.error('There has been a problem with your fetch operation: ', err.message)
      });
  }
}

export default ContactsStore;
