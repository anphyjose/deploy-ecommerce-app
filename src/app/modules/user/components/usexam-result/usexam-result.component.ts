import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { result } from 'src/app/custom/result';

@Component({
  selector: 'app-usexam-result',
  templateUrl: './usexam-result.component.html',
  styleUrls: ['./usexam-result.component.css']
})
export class UsexamResultComponent implements OnInit {

  id:any;                         

  usresult= new result;
  usresultData!: Observable<result[]>;
  resultus:any;


  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router){}
 
 
 
  ngOnInit(): void {

    
    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDatausResult();
    
  }

  loadDatausResult(){
    this.service.getstdetailseresult(this.id).subscribe(
      data => this.usresult = data
    )
  }

}
