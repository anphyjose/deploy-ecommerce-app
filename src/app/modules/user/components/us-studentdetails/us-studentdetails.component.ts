import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { studentInfo } from 'src/app/custom/stdInfo';

@Component({
  selector: 'app-us-studentdetails',
  templateUrl: './us-studentdetails.component.html',
  styleUrls: ['./us-studentdetails.component.css']
})
export class UsStudentdetailsComponent implements OnInit {


  id:any;                         

  stInfo= new studentInfo;
  stInfoData!: Observable<studentInfo[]>;
  std:any;



  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router){}
  
  
  
  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDataStdInfo();
   
    
  }

  loadDataStdInfo(){
    this.service.getstdetailsstInfo(this.id).subscribe(
      data => this.stInfo = data
    )
  }

 

}
