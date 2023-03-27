import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { examination } from 'src/app/custom/exam';


@Component({
  selector: 'app-adreg-update',
  templateUrl: './adreg-update.component.html',
  styleUrls: ['./adreg-update.component.css']
})



export class AdregUpdateComponent implements OnInit  {

  submitted = false;

  id:any;                         
 
  exreg= new examination;
  
 constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router,){}



  ngOnInit(): void {

   this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDataexam();
  }



  loadDataexam(){
    this.service.getstdetailsexam(this.id).subscribe(
      data => this.exreg = data
    )
  }


  
  examSubmit(formData:any){
    this.service.updateexam(this.id,formData.value).subscribe(
      data => {
        this.submitted = true;
        console.log("updated");
        alert("success");
      
        this.router.navigate(['/ad/ara'])


      }
    )
  }
}
