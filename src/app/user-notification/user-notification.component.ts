import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from '../college-website.service';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent {


 constructor(private service: CollegeWebsiteService){}

 onSubmite(data: any){
  this.service.addreg(data)
 }

  
}
