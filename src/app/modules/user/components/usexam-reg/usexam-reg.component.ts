import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { examination } from 'src/app/custom/exam';
import { registation } from 'src/app/custom/registation';

@Component({
  selector: 'app-usexam-reg',
  templateUrl: './usexam-reg.component.html',
  styleUrls: ['./usexam-reg.component.css']
})
export class UsexamRegComponent implements OnInit {


 

  id:any;                         

  Examform= new examination;
  ExRegData!: Observable<examination[]>;
  Exreg:any;

  examData: Observable<registation[]>;
  exam:any;


  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router, private toastr: ToastrService){

    
  this.examData= this.service.getexam();
  this.examData.subscribe(
    data=>
    this.exam=data
  )
  }




  ngOnInit(): void {
   
    
    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDataexamReg();


  }



  
  loadDataexamReg(){
    this.service.getstdetailsexam(this.id).subscribe(
      data => this.Examform = data
    )
  }

  

  onSubmite(data: any){
    
    this.service.addexinfo(data)
    this.router.navigate(['/us/uel']) 
    this.toastr.success('registration successfully!');
   
   }




  
}
