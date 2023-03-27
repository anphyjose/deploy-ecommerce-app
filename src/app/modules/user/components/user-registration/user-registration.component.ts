import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { examination } from 'src/app/custom/exam';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {


  co:string='';
examData: Observable<examination[]>;
exam:any;
 
  
  constructor(private service:CollegeWebsiteService, private router: Router) {



    
    this.examData= this.service.getexam();
    this.examData.subscribe(
      data=>
      this.exam=data
    )

   }

   getExamByCourse(co: string){
    this.co=co;
    console.log(co)
  }
  }


