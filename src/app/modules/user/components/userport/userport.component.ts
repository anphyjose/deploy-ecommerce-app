import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-userport',
  templateUrl: './userport.component.html',
  styleUrls: ['./userport.component.css']
})
export class UserportComponent implements OnInit {
  hide=true;

  loginId!: number;
  login:FormGroup | any;

  constructor(private service:CollegeWebsiteService, private router: Router,){}



  ngOnInit(): void {
     this.login = new FormGroup({
      'name' : new FormControl,
      'id' :new FormControl
     })
  }


  kukkulodIn(login:FormGroup){

    this.service.getstInfo().subscribe(res =>{

      console.log(this.login.value)
      console.log(this.loginId)
      const user =res.find((a:any)=>{
        return a.name === this.login.value.name && a.id === this.login.value.id;
        
      });
       
      if(user){
       
        this.router.navigate(['/us/ussi/',this.loginId]);
        this.login.reset();

      }else{
        alert("something error");
        this.login.reset();

        this.router.navigate(['/us/up']);   
      }

    },err=>{
      alert('wrong');
    })
   }
}
