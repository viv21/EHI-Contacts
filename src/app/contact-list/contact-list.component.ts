import { Component, OnInit } from '@angular/core';
import {Contact} from '../contactModel/contact'
import { ContactServiceService } from '../contact-service.service'
import {ToastrService} from 'ngx-toastr';;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact> = [];
  isEditOn:boolean=false;
  selectedRow:Contact;
  editedContact:Contact;

  constructor(private contactService:ContactServiceService,private toastrService:ToastrService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  toggleEdit(contact:Contact){
    this.selectedRow = contact;
    this.editedContact = JSON.parse(JSON.stringify(this.selectedRow));
    this.isEditOn = !this.isEditOn;
  }

  cancelEdit(){
    this.isEditOn = false;
  }

  updateContact(editedContact){
    this.contactService.updateContact(editedContact);
    this.isEditOn = false;
    this.toastrService.success('Updated',"Contact Updated");
  }
  deleteContact(contact){
    this.contactService.deleteContact(contact);
    this.toastrService.success('Deleted',"Contact Deleted");
  }

  onkeydown(event){
    if(!(/[0-9]/.test(event.key) || event.key=="ArrowLeft" ||event.key=="ArrowRight" || event.key=="Backspace" || event.key=="Delete")){
      event.preventDefault();
    }
  }
}
