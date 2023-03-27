import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from '../college-website.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit{


  hide=true;

  loginId!: number;
  login:FormGroup | any;

  constructor(private service:CollegeWebsiteService, private router: Router){}
  ngOnInit(): void {
    this.login = new FormGroup({
      'pwd' : new FormControl,
      'id' :new FormControl
     })
  }
  

  kukkulodIn(login:FormGroup){

    this.service.getstInfo().subscribe(res =>{

      console.log(this.login.value)
      console.log(this.loginId)
      const user =res.find((a:any)=>{
        return  a.id === this.login.value.id;
       
      });
     
       
      if(user){
        this.router.navigate(['/rview/',this.loginId]);
        this.login.reset();

      }else{
        alert("something error");
        this.login.reset();

        this.router.navigate(['/uslog']);   
      }

    },err=>{
      alert('wrong');
    })
   }


}
