import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  

  formData={
    fname:'',
    lname:'',
    phno:'',
    email:''
  }

  kk(){
    alert('Message Sent Successfully \n \n \n Thank You');
  }
  
}
