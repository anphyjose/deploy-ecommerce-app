import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from 'src/app/college-website.service';
import { registation } from 'src/app/custom/registation';

@Component({
  selector: 'app-usadmission-candlist',
  templateUrl: './usadmission-candlist.component.html',
  styleUrls: ['./usadmission-candlist.component.css']
})



export class UsadmissionCandlistComponent {

  regData: Observable<registation[]>;
  reg:any;
  id:string='';

  constructor(private service:CollegeWebsiteService, private router: Router,){

    this.regData= this.service.getreg();
    this.regData.subscribe(
      data=>
      this.reg=data
    )
    
  }


  baEng:string='ba English';
  baEco:string='ba Economics';
  bscMath:string='bsc Mathematics';
  bscPhy:string='bsc Physics';
  bcomF:string='bcom Finance';
  bcomCo:string='bcom Cooperation';
  
}
