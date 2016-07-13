import {observable, computed, action, autorun} from 'mobx';
import 'whatwg-fetch';

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
}

export default ContactsStore;
