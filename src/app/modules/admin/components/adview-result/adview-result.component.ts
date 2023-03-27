import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { result } from 'src/app/custom/result';

@Component({
  selector: 'app-adview-result',
  templateUrl: './adview-result.component.html',
  styleUrls: ['./adview-result.component.css']
})
export class AdviewResultComponent {


  examresultData: Observable<result[]>;
  examresult:any;





  constructor(private service:CollegeWebsiteService, private router: Router){


    this.examresultData= this.service.getresult();
    this.examresultData.subscribe(
      data=>
      this.examresult=data
    )




  }


  
  deleteResults(id: any){

    this.service.deleteresult(id).subscribe((resp)=>{
      console.log("Deleted");
    }
    )
    this.router.navigate(['/ad/ars'])       

    
  }


  
   
   }











