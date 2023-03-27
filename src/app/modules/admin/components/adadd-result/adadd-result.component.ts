import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { registation } from 'src/app/custom/registation';

@Component({
  selector: 'app-adadd-result',
  templateUrl: './adadd-result.component.html',
  styleUrls: ['./adadd-result.component.css']
})

 

export class AdaddResultComponent {


  examData: Observable<registation[]>;
  exam:any;

  sub=[""];
  prog:string='';
   internal1:string='';
  external1:string='';

  internal2:string='';
  external2:string='';
  

  internal3:string='';
  external3:string='';
  

  internal4:string='';
  external4:string='';
  


  setSub(){
    if(this.prog == "BA"){
      this.sub =["BA-001","BA-002","BA-003", "BA-004"];
    } 

    if(this.prog == "BSC"){
      this.sub =["BSC-001","BSC-002","BSC-003", "BSC-004"];
    }

    if(this.prog == "BCOM"){
      this.sub =["BCOM-001","BCOM-002","BCOM-003", "BCOM-004"];
    }
  }



  constructor(private service : CollegeWebsiteService, private router :Router,private toastr: ToastrService, ){

    this.examData= this.service.getexam();
    this.examData.subscribe(
      data=>
      this.exam=data
    )

  }
 
  
  total1:any;
  total2:any;
  total3:any;
  total4:any;
  grade1:string='';
  grade2:string='';
  grade3:string='';
  grade4:string='';


  onSubmite(data: any){
    this.service.addresult(data)
    this.router.navigate(['/ad/ars']);
    this.toastr.success('Successfully!');
    this.service.reset()
    
   
   }

   sum(){
    this.total1 = parseInt(this.internal1) + parseInt(this.external1)
    this.total2 = parseInt(this.internal2) + parseInt(this.external2)
    this.total3 = parseInt(this.internal3) + parseInt(this.external3)
    this.total4 = parseInt(this.internal4) + parseInt(this.external4)
  
      if(this.total1 >89 && this.total1 <101){
        this.grade1="A+"
      }else if(this.total1>79 && this.total1 <90){
        this.grade1="A"
      }else if(this.total1>69 && this.total1 <80){
           this.grade1="B"
      } else if(this.total1>59 && this.total1 <70){
        this.grade1="C"
      }else if(this.total1>49 && this.total1 <60){
        this.grade1="D"
      }else if(this.total1>39 && this.total1 <50){
        this.grade1="E"
      }else{
        this.grade1="F"
      };

      if(this.total2 >89 && this.total2 <101){
        this.grade2="A+"
      }else if(this.total2>79 && this.total2 <90){
        this.grade2="A"
      }else if(this.total2>69 && this.total2 <80){
           this.grade2="B"
      } else if(this.total2>59 && this.total2 <70){
        this.grade2="C"
      }else if(this.total2>49 && this.total2 <60){
        this.grade2="D"
      }else if(this.total2>39 && this.total2 <50){
        this.grade2="E"
      }else{
        this.grade2="F"
      };

      if(this.total3 >89 && this.total3 <101){
        this.grade3="A+"
      }else if(this.total3>79 && this.total3 <90){
        this.grade3="A"
      }else if(this.total3>69 && this.total3 <80){
           this.grade3="B"
      } else if(this.total3>59 && this.total3 <70){
        this.grade3="C"
      }else if(this.total3>49 && this.total3 <60){
        this.grade3="D"
      }else if(this.total3>39 && this.total3 <50){
        this.grade3="E"
      }else{
        this.grade3="F"
      };

      if(this.total4 >89 && this.total4 <101){
        this.grade4="A+"
      }else if(this.total4>79 && this.total4 <90){
        this.grade4="A"
      }else if(this.total4>69 && this.total4 <80){
           this.grade4="B"
      } else if(this.total4>59 && this.total4 <70){
        this.grade4="C"
      }else if(this.total4>49 && this.total4 <60){
        this.grade4="D"
      }else if(this.total4>39 && this.total4 <50){
        this.grade4="E"
      }else{
        this.grade4="F"
      };
   }


}
 