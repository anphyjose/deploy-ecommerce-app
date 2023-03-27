import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { studentInfo } from 'src/app/custom/stdInfo';

@Component({
  selector: 'app-ad-studentview',
  templateUrl: './ad-studentview.component.html',
  styleUrls: ['./ad-studentview.component.css']
})
export class AdStudentviewComponent {

  stdData: Observable<studentInfo[]>;
  stds:any;


  constructor(private service:CollegeWebsiteService, private router: Router){


    this.stdData= this.service.getstInfo();
    this.stdData.subscribe(
      data=>
      this.stds=data
    )
  }


 

   
  deleterStudentInfo(id: any){

    this.service.deletestInfo(id).subscribe((resp)=>{
      console.log("Deleted");
      this.router.navigate(['/ad/adsi'])
    }
    )
    // this.router.navigate(['/us/uar'])       

    
  }




}
