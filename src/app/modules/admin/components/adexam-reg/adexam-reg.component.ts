import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { ExamInfo } from 'src/app/custom/ExamInfo';

@Component({
  selector: 'app-adexam-reg',
  templateUrl: './adexam-reg.component.html',
  styleUrls: ['./adexam-reg.component.css']
})
export class AdexamRegComponent {

  examInfoData: Observable<ExamInfo[]>;
  examInfo:any;


  constructor(private service:CollegeWebsiteService, private router: Router){


    this.examInfoData= this.service.getexInfo();
    this.examInfoData.subscribe(
      data=>
      this.examInfo=data
    )


  }

  deleteExInfo(id: any){

    this.service.deleteexInfo(id).subscribe((resp)=>{
      console.log("Deleted");
    }
    )
    this.router.navigate(['/ad/arg'])       

    
  }

}
