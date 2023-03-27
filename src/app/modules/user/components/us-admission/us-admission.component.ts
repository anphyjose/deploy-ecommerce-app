import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-us-admission',
  templateUrl: './us-admission.component.html',
  styleUrls: ['./us-admission.component.css']
})
export class UsAdmissionComponent implements OnInit{
  hide=true;
  
  loginId!: number;
  login:FormGroup | any;
  constructor( private service:CollegeWebsiteService, private router: Router,){}
  ngOnInit(): void {
    this.login = new FormGroup({
      'fname' : new FormControl,
      'id' :new FormControl
     })
  }


  kukkulodIn(login:FormGroup){

    this.service.getreg().subscribe(res =>{

      console.log(this.login.value)
      console.log(this.loginId)
      const user =res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.id === this.login.value.id
      });
       
      if(user){
       
        this.router.navigate(['/us/ua/uade/',this.loginId]);
        this.login.reset();

      }else{
        alert("something error");
        this.login.reset();

        this.router.navigate(['/us/ua']);   
      }

    },err=>{
      alert('wrong');
    })
   }

   backgroundUrl="../../assets/img/CollegeLogoBW.png"
  }

