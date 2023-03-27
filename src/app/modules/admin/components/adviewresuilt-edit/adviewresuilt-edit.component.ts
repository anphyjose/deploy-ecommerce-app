import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { registation } from 'src/app/custom/registation';
import { result } from 'src/app/custom/result';

@Component({
  selector: 'app-adviewresuilt-edit',
  templateUrl: './adviewresuilt-edit.component.html',
  styleUrls: ['./adviewresuilt-edit.component.css']
})
export class AdviewresuiltEditComponent implements OnInit{

  examData: Observable<registation[]>;
  exam:any;
  submitted = false;
  
  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router,public dialog: MatDialog){

    this.examData= this.service.getexam();
    this.examData.subscribe(
      data=>
      this.exam=data
    )
  }
    

    id:any;                       
    //  students = new details;
    resultEdit= new result;


    loadDataresult(){
      this.service.getstdetailseresult(this.id).subscribe(
        data => this.resultEdit = data
      )
    }
 

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id =(params.get('id'))
    );
    this.loadDataresult();


    }

    
  resultSubmit(formData:any){
    this.service.updateresult(this.id,formData.value).subscribe(
      data => {
        this.submitted = true;
        console.log("updated");
        alert("success");
        this.router.navigate(['/ad/arsv'])


      }
    )
  }




  totalMark(){

    this.resultEdit.tmark1 = parseInt(this.resultEdit.imark1) + parseInt (this.resultEdit.emark1)
    this.resultEdit.tmark2 = parseInt(this.resultEdit.imark2) + parseInt (this.resultEdit.emark2)
    this.resultEdit.tmark3 = parseInt(this.resultEdit.imark3) + parseInt (this.resultEdit.emark3)
    this.resultEdit.tmark4 = parseInt(this.resultEdit.imark4) + parseInt (this.resultEdit.emark4)


      if(this.resultEdit.tmark1 >89 && this.resultEdit.tmark1 <101){
            this.resultEdit.grade1="A+"
          }else if(this.resultEdit.tmark1>79 && this.resultEdit.tmark1 <90){
            this.resultEdit.grade1="A"
          }else if(this.resultEdit.tmark1>69 && this.resultEdit.tmark1 <80){
               this.resultEdit.grade1="B"
          } else if(this.resultEdit.tmark1>59 && this.resultEdit.tmark1 <70){
            this.resultEdit.grade1="C"
          }else if(this.resultEdit.tmark1>49 && this.resultEdit.tmark1 <60){
            this.resultEdit.grade1="D"
          }else if(this.resultEdit.tmark1>39 && this.resultEdit.tmark1 <50){
            this.resultEdit.grade1="E"
          }else{
            this.resultEdit.grade1="F"
          };

        
      if(this.resultEdit.tmark2 >89 && this.resultEdit.tmark2 <101){
            this.resultEdit.grade2="A+"
          }else if(this.resultEdit.tmark2>79 && this.resultEdit.tmark2 <90){
            this.resultEdit.grade2="A"
          }else if(this.resultEdit.tmark2>69 && this.resultEdit.tmark2 <80){
            this.resultEdit.grade2="B"
          } else if(this.resultEdit.tmark2>59 && this.resultEdit.tmark2 <70){
            this.resultEdit.grade2="C"
          }else if(this.resultEdit.tmark2>49 && this.resultEdit.tmark2 <60){
            this.resultEdit.grade2="D"
          }else if(this.resultEdit.tmark2>39 && this.resultEdit.tmark2 <50){
            this.resultEdit.grade2="E"
          }else{
            this.resultEdit.grade2="F"
          };

      if(this.resultEdit.tmark3 >89 && this.resultEdit.tmark3 <101){
            this.resultEdit.grade3="A+"
          }else if(this.resultEdit.tmark3>79 && this.resultEdit.tmark3 <90){
            this.resultEdit.grade3="A"
          }else if(this.resultEdit.tmark3>69 && this.resultEdit.tmark3 <80){
            this.resultEdit.grade3="B"
          } else if(this.resultEdit.tmark3>59 && this.resultEdit.tmark3 <70){
            this.resultEdit.grade3="C"
          }else if(this.resultEdit.tmark3>49 && this.resultEdit.tmark3 <60){
            this.resultEdit.grade3="D"
          }else if(this.resultEdit.tmark3>39 && this.resultEdit.tmark3 <50){
            this.resultEdit.grade3="E"
          }else{
            this.resultEdit.grade3="F"
          };

      if(this.resultEdit.tmark4 >89 && this.resultEdit.tmark4 <101){
            this.resultEdit.grade4="A+"
          }else if(this.resultEdit.tmark4>79 && this.resultEdit.tmark4 <90){
            this.resultEdit.grade4="A"
          }else if(this.resultEdit.tmark4>69 && this.resultEdit.tmark4 <80){
            this.resultEdit.grade4="B"
          } else if(this.resultEdit.tmark4>59 && this.resultEdit.tmark4 <70){
            this.resultEdit.grade4="C"
          }else if(this.resultEdit.tmark4>49 && this.resultEdit.tmark4 <60){
            this.resultEdit.grade4="D"
          }else if(this.resultEdit.tmark4>39 && this.resultEdit.tmark4 <50){
            this.resultEdit.grade4="E"
          }else{
            this.resultEdit.grade4="F"
          };
    
          
       
  }

  


  // resu:any;

  // cal(v:string,vv:string){
  //   this.resu=parseInt(v) +  parseInt(vv);
  //   console.log(this.resu)
  // }



  // sub=[""];
  // prog:string='';
  //  internal1:string='';
  // external1:string='';

  // internal2:string='';
  // external2:string='';
  

  // internal3:string='';
  // external3:string='';
  

  // internal4:string='';
  // external4:string='';
  


  // setSub(){
  //   if(this.prog == "BA"){
  //     this.sub =["BA-001","BA-002","BA-003", "BA-004"];
  //   } 

  //   if(this.prog == "BSC"){
  //     this.sub =["BSC-001","BSC-002","BSC-003", "BSC-004"];
  //   }

  //   if(this.prog == "BCOM"){
  //     this.sub =["BCOM-001","BCOM-002","BCOM-003", "BCOM-004"];
  //   }
  // }



  // total1:any;
  // total2:any;
  // total3:any;
  // total4:any;
  // grade1:string='';
  // grade2:string='';
  // grade3:string='';
  // grade4:string='';



  //  sum(){
  //   this.total1 = parseInt(this.internal1) + parseInt(this.external1);
  //   this.total2 = parseInt(this.internal2) + parseInt(this.external2)
  //   this.total3 = parseInt(this.internal3) + parseInt(this.external3)
  //   this.total4 = parseInt(this.internal4) + parseInt(this.external4)
  
  //     if(this.total1 >89 && this.total1 <101){
  //       this.grade1="A+"
  //     }else if(this.total1>79 && this.total1 <90){
  //       this.grade1="A"
  //     }else if(this.total1>69 && this.total1 <80){
  //          this.grade1="B"
  //     } else if(this.total1>59 && this.total1 <70){
  //       this.grade1="C"
  //     }else if(this.total1>49 && this.total1 <60){
  //       this.grade1="D"
  //     }else if(this.total1>39 && this.total1 <50){
  //       this.grade1="E"
  //     }else{
  //       this.grade1="F"
  //     };

  //     if(this.total2 >89 && this.total2 <101){
  //       this.grade2="A+"
  //     }else if(this.total2>79 && this.total2 <90){
  //       this.grade2="A"
  //     }else if(this.total2>69 && this.total2 <80){
  //          this.grade2="B"
  //     } else if(this.total2>59 && this.total2 <70){
  //       this.grade2="C"
  //     }else if(this.total2>49 && this.total2 <60){
  //       this.grade2="D"
  //     }else if(this.total2>39 && this.total2 <50){
  //       this.grade2="E"
  //     }else{
  //       this.grade2="F"
  //     };

  //     if(this.total3 >89 && this.total3 <101){
  //       this.grade3="A+"
  //     }else if(this.total3>79 && this.total3 <90){
  //       this.grade3="A"
  //     }else if(this.total3>69 && this.total3 <80){
  //          this.grade3="B"
  //     } else if(this.total3>59 && this.total3 <70){
  //       this.grade3="C"
  //     }else if(this.total3>49 && this.total3 <60){
  //       this.grade3="D"
  //     }else if(this.total3>39 && this.total3 <50){
  //       this.grade3="E"
  //     }else{
  //       this.grade3="F"
  //     };

  //     if(this.total4 >89 && this.total4 <101){
  //       this.grade4="A+"
  //     }else if(this.total4>79 && this.total4 <90){
  //       this.grade4="A"
  //     }else if(this.total4>69 && this.total4 <80){
  //          this.grade4="B"
  //     } else if(this.total4>59 && this.total4 <70){
  //       this.grade4="C"
  //     }else if(this.total4>49 && this.total4 <60){
  //       this.grade4="D"
  //     }else if(this.total4>39 && this.total4 <50){
  //       this.grade4="E"
  //     }else{
  //       this.grade4="F"
  //     };
  //  }

}
