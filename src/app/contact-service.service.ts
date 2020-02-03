import { Injectable } from '@angular/core';
import { Contact } from './contactModel/contact'
import { mockContacts } from './mockData/mockContacts'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts:Contact[] = mockContacts;
  constructor() { }
  
  getContacts():Contact[]{
    return this.contacts;
  }

  addContact(contact:Contact){
    this.contacts.push(contact);
  }

  updateContact(contact:Contact){
    let index = this.contacts.findIndex(ele=>ele.email==contact.email);
    this.contacts.splice(index,1,contact);
  }

  deleteContact(contact:Contact){
    let index = this.contacts.findIndex(ele=>ele.email==contact.email);
    this.contacts.splice(index,1);
  }
}
