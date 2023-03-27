import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { registation } from 'src/app/custom/registation';

@Component({
  selector: 'app-usadmission-details',
  templateUrl: './usadmission-details.component.html',
  styleUrls: ['./usadmission-details.component.css']
})
export class UsadmissionDetailsComponent implements OnInit{

  id:any;                         

  reglog= new registation;
  regData!: Observable<registation[]>;
  reg:any;
  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router){}

  
  ngOnInit(): void  {
  

    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDatareg();
  }

  loadDatareg(){
    this.service.getstdetailsreg(this.id).subscribe(
      data => this.reglog = data
    )
  }

  
   
}
