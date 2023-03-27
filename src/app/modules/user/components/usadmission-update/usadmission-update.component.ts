import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { DetailDailogeComponent } from 'src/app/com/detail-dailoge/detail-dailoge.component';
import { registation } from 'src/app/custom/registation';

@Component({
  selector: 'app-usadmission-update',
  templateUrl: './usadmission-update.component.html',
  styleUrls: ['./usadmission-update.component.css']
})
export class UsadmissionUpdateComponent implements OnInit {
  submitted = false;


   constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router,public dialog: MatDialog){}
  
   id:any;                         
  //  students = new details;
  reglog= new registation;

  
   ngOnInit(): void  {
  

    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDatareg();
  }

  loadDatareg(){
    this.service.getstdetailsreg(this.id).subscribe(
      data => this.reglog = data
    )
  }
   
  //  loadData(){
  //   this.service.getstdetails(this.id).subscribe(
  //     data => this.students = data
  //   )
  // }

  // handleSubmit(formData:any){
  //   this.service.updatestd(this.id,formData.value).subscribe(
  //     data => {
  //       this.submitted = true;
  //       console.log("updated");
  //       alert("success");
  //       this.router.navigate(['/us/ual'])


  //     }
  //   )
  // }


  regSubmit(formData:any){
    this.service.updatereg(this.id,formData.value).subscribe(
      data => {
        this.submitted = true;
        console.log("updated");
        alert("success");
        this.router.navigate(['/us/ua'])


      }
    )
  }


  openDialog() {
    this.dialog.open(DetailDailogeComponent);
  }


}
