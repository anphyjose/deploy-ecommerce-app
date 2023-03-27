import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-usexamlogin',
  templateUrl: './usexamlogin.component.html',
  styleUrls: ['./usexamlogin.component.css']
})
export class UsexamloginComponent implements OnInit{
 
 
 
  loginId!: number;
  login:FormGroup | any;


  ngOnInit(): void {
    this.login = new FormGroup({
      'name' : new FormControl,
      'id' :new FormControl
     })
  }
  hide=true;

constructor(private service:CollegeWebsiteService, private router: Router,){}


  kukkulodIn(login:FormGroup){

    this.service.getstInfo().subscribe(res =>{

      console.log(this.login.value)
      console.log(this.loginId)
      const user =res.find((a:any)=>{
        return a.name === this.login.value.name && a.id === this.login.value.id
      });
       
      if(user){
        this.router.navigate(['/us/uer']);
        this.login.reset();

      }else{
        alert("something error");
        this.login.reset();

        this.router.navigate(['/us/uel']);   
      }

    },err=>{
      alert('wrong');
    })
   }
}
