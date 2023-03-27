import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { studentInfo } from 'src/app/custom/stdInfo';

@Component({
  selector: 'app-ad-studentedit',
  templateUrl: './ad-studentedit.component.html',
  styleUrls: ['./ad-studentedit.component.css']
})
export class AdStudenteditComponent implements OnInit{

  submitted = false;
  stdedit= new studentInfo;
  id:any;


  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router){}
  
  
  
  
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
      
        this.router.navigate(['/ad/advw'])


      }
    )
  }



}
