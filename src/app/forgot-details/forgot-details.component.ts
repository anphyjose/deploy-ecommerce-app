import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeWebsiteService } from '../college-website.service';
import { studentInfo } from '../custom/stdInfo';

@Component({
  selector: 'app-forgot-details',
  templateUrl: './forgot-details.component.html',
  styleUrls: ['./forgot-details.component.css']
})
export class ForgotDetailsComponent implements OnInit{


  stdedit= new studentInfo;
  submitted = false;
  id:any;
  login:FormGroup | any;
  
  constructor(private service:CollegeWebsiteService, private router: Router,public route:ActivatedRoute){}
  
  
  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDatastdedit();


  }

  
  loadDatastdedit(){
    this.service.getstdetailsstInfo(this.id).subscribe(
      data => this.stdedit = data
    )
  }

  stdInfoSubmit(formData:any){
  
    this.service.updatestInfo(this.id,formData.value).subscribe(
      data => {
        this.submitted = true;
        console.log("updated");
        alert("success");
      
        this.router.navigate(['uslog'])


      }
    )
  }

}
