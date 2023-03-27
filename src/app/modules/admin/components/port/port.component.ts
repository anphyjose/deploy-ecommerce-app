import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent {



  hide=true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

constructor(private service:CollegeWebsiteService, private router:Router){}






onSubmit(): void {
  if (this.loginForm.valid) {
    this.service.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/ad/po']);
      },
      (err: Error) => {
        alert(err.message);
      }
    );
  }
}


}
