import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from '../college-website.service';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {

  hide=true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private service:CollegeWebsiteService, private router:Router){}
  
  
  ngOnInit(): void {
    
      if (this.service.isLoggedIn()) {
        this.router.navigate(['/ad']);
      }
  }





  onSubmit(): void {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/ad/op']);
        },
        (err: Error) => {
          alert(err.message);
          this.loginForm.reset()
        }
      );
    }
  }
}
