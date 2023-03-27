import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { examination } from 'src/app/custom/exam';


@Component({
  selector: 'app-adreg-activities',
  templateUrl: './adreg-activities.component.html',
  styleUrls: ['./adreg-activities.component.css']
})
export class AdregActivitiesComponent {


co:string='';
examData: Observable<examination[]>;
exam:any;

   constructor(private service:CollegeWebsiteService, private router: Router){



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

  
  deleteregtration(id: any){

    this.service.deleteexam(id).subscribe((resp)=>{
      console.log("Deleted");
    }
    )
    this.router.navigate(['/ad/arg'])       

    
  }

  searchText:string=''
}
