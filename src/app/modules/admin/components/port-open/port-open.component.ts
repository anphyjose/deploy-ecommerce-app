import { Component } from '@angular/core';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-port-open',
  templateUrl: './port-open.component.html',
  styleUrls: ['./port-open.component.css']
})
export class PortOpenComponent {

  constructor( private service:CollegeWebsiteService){}

  logout(){

    this.service.logout();
  }

}
