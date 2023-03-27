import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from '../college-website.service';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {


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
        return a.pwd === this.login.value.pwd && a.id === this.login.value.id;
       
      });
     
       
      if(user){
        this.router.navigate(['/us/ussi/',this.loginId]);
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
