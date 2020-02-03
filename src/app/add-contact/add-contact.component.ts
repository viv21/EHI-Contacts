import { Component, OnInit } from '@angular/core';
import {Contact} from '../contactModel/contact'
import {ContactServiceService} from '../contact-service.service'
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact:Contact = new Contact();
  constructor(private contactService:ContactServiceService,private toastrService:ToastrService) { }

  ngOnInit() {
  }

  addContact(form){
    let idx = this.contactService.contacts.findIndex(ele=>ele.email==form.value.email)
    if(idx>-1){
      this.toastrService.error('Already Exists',"Email already exists");
    }
    else{
      this.contactService.addContact(form.value);
      form.resetForm();
      this.toastrService.success('Added',"Contact Added");
    }
    
  }
  onkeydown(event){
    if(!(/[0-9]/.test(event.key) || event.key=="ArrowLeft" ||event.key=="ArrowRight" || event.key=="Backspace" || event.key=="Delete")){
      event.preventDefault();
    }
  }

}
