import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { registation } from 'src/app/custom/registation';

@Component({
  selector: 'app-admin-admission',
  templateUrl: './admin-admission.component.html',
  styleUrls: ['./admin-admission.component.css']
})
export class AdminAdmissionComponent {
  regData: Observable<registation[]>;
  reg:any;


  constructor(private service:CollegeWebsiteService, private router: Router){

    this.regData= this.service.getreg();
    this.regData.subscribe(
      data=>
      this.reg=data
    )
  }

  deleteregtration(id: any){
    this.service.deletereg(id).subscribe((resp)=>{
      console.log("Deleted");
    }
    )
    this.router.navigate(['/ad/op'])       

    
  }
}
