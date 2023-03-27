import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-usadmission-reg',
  templateUrl: './usadmission-reg.component.html',
  styleUrls: ['./usadmission-reg.component.css'],

 
  
})
export class UsadmissionRegComponent implements OnInit{

  
  
  
  constructor(private service : CollegeWebsiteService, private router :Router,private toastr: ToastrService, private formbuld: FormBuilder ){}
  ngOnInit(): void {
  }

  

  // onSubmite(data: any){
  //   this.service.addstd(data)

  //   this.router.navigate(['/us/ual'])
    
  // }
id:string='';

  onSubmite(data: any){
    this.service.addreg(data)
    this.router.navigate(['/us/ua']) 
    this.toastr.success('registration successfully!');
   
   }

   

  
}
