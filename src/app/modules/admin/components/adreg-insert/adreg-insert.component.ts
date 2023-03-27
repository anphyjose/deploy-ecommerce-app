import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-adreg-insert',
  templateUrl: './adreg-insert.component.html',
  styleUrls: ['./adreg-insert.component.css']
})
export class AdregInsertComponent {

  constructor(private service : CollegeWebsiteService, private router :Router){}



  onSubmite(data: any){
    this.service.addexam(data)

    this.router.navigate(['/ad/ara']) 
   
   }


}
