import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { registation } from 'src/app/custom/registation';


@Component({
  selector: 'app-usadmission-login',
  templateUrl: './usadmission-login.component.html',
  styleUrls: ['./usadmission-login.component.css']
})
export class UsadmissionLoginComponent implements OnInit{

  // studentData: Observable<details[]>;
  // student:any;

  regData: Observable<registation[]>;
  reg:any;
  id:string='';


  login:FormGroup | any;
  loginId:string='';


  constructor( private service:CollegeWebsiteService, private router: Router,){

    // this.studentData= this.service.getstd();
    // this.studentData.subscribe(
    //   data=>
    //   this.student=data
    // )

    this.regData= this.service.getreg();
    this.regData.subscribe(
      data=>
      this.reg=data
    )
    
  }

  
  ngOnInit(): void {
   

  }

  

  

  // deletestudent(id: any){
  //   this.service.deletestd(id).subscribe((resp)=>{
  //     console.log("Deleted");
  //   }
  //   )
  //   this.router.navigate(['/us/uar'])       

    
  // }

  deleteregtration(id: any){

    this.service.deletereg(id).subscribe((resp)=>{
      console.log("Deleted");
    }
    )
    // this.router.navigate(['/us/uar'])       

    
  }


  

   


   kukkulodIn(login:FormGroup){

    this.service.getreg().subscribe(res =>{

      console.log(this.login.value)
      console.log(this.loginId)
      const user =res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.id === this.login.value.id
      });
       
      if(user){
        this.router.navigate(['/us/uade/',this.loginId]);
        this.login.reset();

      }else{
        this.router.navigate(['/us/uar']);   
      }

    },err=>{
      alert('wrong');
    })
   }
}
