import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollegeWebsiteService } from 'src/app/college-website.service';

@Component({
  selector: 'app-ad-studentadd',
  templateUrl: './ad-studentadd.component.html',
  styleUrls: ['./ad-studentadd.component.css']
})
export class AdStudentaddComponent {

jh:string='assets/img/'
lj:string=''
ok:string=''
  constructor(private service : CollegeWebsiteService, private router :Router,private toastr: ToastrService){}



  onSubmite(data: any){
    this.service.addstInfo(data)
    // this.router.navigate(['/us/ual']) 
    this.toastr.success('Successfully!');
    this.service.reset();
    this.router.navigate(['/ad/adsi'])
    
   
   }

kk(){
this.lj=this.jh+this.lj
console.log(this.ok)

}

}
