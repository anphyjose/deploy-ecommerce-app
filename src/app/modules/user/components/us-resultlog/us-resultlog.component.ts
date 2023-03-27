import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-us-resultlog',
  templateUrl: './us-resultlog.component.html',
  styleUrls: ['./us-resultlog.component.css']
})
export class UsResultlogComponent {


  
  loginId!: number;
  login:FormGroup | any;


  ngOnInit(): void {
    this.login = new FormGroup({
      'name' : new FormControl,
      'id' :new FormControl
     })
  }


  hide=true;



  constructor(private service:CollegeWebsiteService, private router: Router){}



  
  kukkulodIn(login:FormGroup){

    this.service.getresult().subscribe(res =>{

      console.log(this.login.value)
      console.log(this.loginId)
      const user =res.find((a:any)=>{
        return a.name === this.login.value.name && a.id === this.login.value.id
      });
       
      if(user){
        this.router.navigate(['/us/usre/',this.loginId]);
        this.login.reset();
       

      }else{
        alert("something error");
        this.login.reset();

        this.router.navigate(['/us/url']);   
      }

    },err=>{
      alert('wrong');
    })
   }






}
