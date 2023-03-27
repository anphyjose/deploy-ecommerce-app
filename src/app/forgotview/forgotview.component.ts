import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from '../college-website.service';
import { studentInfo } from '../custom/stdInfo';

@Component({
  selector: 'app-forgotview',
  templateUrl: './forgotview.component.html',
  styleUrls: ['./forgotview.component.css']
})
export class ForgotviewComponent implements OnInit{

  id:any;                         

  std= new studentInfo;
  stdata!: Observable<studentInfo[]>;
  s:any;

  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router){}
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDatareg();
  
  }

  loadDatareg(){
    this.service.getstdetailsstInfo(this.id).subscribe(
      data => this.std = data
    )
  }

}
