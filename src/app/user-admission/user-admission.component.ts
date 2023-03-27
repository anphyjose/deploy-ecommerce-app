import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from '../college-website.service';
import { registation } from '../custom/registation';

@Component({
  selector: 'app-user-admission',
  templateUrl: './user-admission.component.html',
  styleUrls: ['./user-admission.component.css']
})




export class UserAdmissionComponent {



 
  

 m1:string='';
 m2:string='';
 
 result:any;
 g:string='';



 kuku(){
  this.result = parseInt(this.m1) + parseInt(this.m2) 

    if(this.result>40 && this.result <50){
      this.g="F"
    }else if(this.result>30 && this.result <40){
      this.g="g"
    }else if(this.result>20 && this.result <30){
         this.g="k"
    } else{
      this.g="o"
    }
 }


 


//  id:any;                         

//  reglog= new registation;
//  regData!: Observable<registation[]>;
//  reg:any;
//  constructor(private service:CollegeWebsiteService, public route:ActivatedRoute, public router:Router){}

 
//  ngOnInit(): void  {
 

//    this.route.paramMap.subscribe(
//      params => this.id =(params.get('id'))
//    );
//    this.loadDatareg();

   

//  }

//  loadDatareg(){
//    this.service.getstdetailsreg(this.id).subscribe(
//      data => this.reglog = data
//    )
//  }




constructor(private service : CollegeWebsiteService, private router :Router,private toastr: ToastrService, private formbuld: FormBuilder ){}
  ngOnInit(): void {
  }

  

  // onSubmite(data: any){
  //   this.service.addstd(data)

  //   this.router.navigate(['/us/ual'])
    
  // }
id:string='';

  onSubmite(data: any){
    this.service.addresult(data)

    this.toastr.success('registration successfully!');
   
   }

















  // url="assets\img\admission.png";

  // onselectFile(e:any){
  //   if(e.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //     }
  //   }
  // }


//   constructor(private http:HttpClient){}
// selectFile:any  = null;

//   onFileSelect(event: any){
//      this.selectFile = <File> event.target.files[0];
//   }

//   onUploaded(){

//  const fd = new FormData();
//  fd.append('image',this.selectFile, this.selectFile.name)
//     this.http.post('http://localhost:3000/kukku/',fd)
//     .subscribe(result =>{

//       console.log(result);

//     })

//   }
}
