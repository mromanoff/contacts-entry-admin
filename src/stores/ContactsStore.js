import {observable, computed, action, autorun} from 'mobx';
import 'whatwg-fetch';
import uuid from 'uuid'

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
    this.contacts.push({
      _id: {$oid: uuid.v4()},
      firstName: 'first name',
      lastName: 'last name',
      email: 'email'
    });
  }

  @action
  editContact(contact) {
    console.debug('edit contact', contact);
  }

  @action
  deleteContact(contact) {

    let init = {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache'
    };


    const id = contact._id;

    console.log('contact delete', contact._id);

    // const contacts = this.contacts;
    // const contactIndex = contacts.indexOf(contact);
    //
    // if (contactIndex < 0) {
    //   return;
    // }
    // contacts.splice(contactIndex, 1);


    fetch(find(id), init)
      .then(response => response.json())
      .then((contact) => {
        console.warn(`Successfully deleted contact! ${contact._id.$oid}`);
        this.setState({
          message: `Successfully deleted contact! ${contact._id.$oid}`
        });
      }).catch(function (err) {
      console.error('There has been a problem with your fetch operation: ', err.message)
    });


  }

}

// deleteContact() {
//     let init = {
//         method: 'DELETE',
//         mode: 'cors',
//         cache: 'no-cache'
//     };
//
//     // fetch(config.find(this.id), init)
//     //     .then(response => response.json())
//     //     .then((contact) => {
//     //         console.warn(`Successfully deleted contact! ${contact._id.$oid}`);
//     //         this.setState({
//     //             message: `Successfully deleted contact! ${contact._id.$oid}`
//     //         });
//     //         this.reloadContacts();
//     //     }).catch(function (err) {
//     //     console.error('There has been a problem with your fetch operation: ', err.message)
//     // });
// }


export default ContactsStore;
