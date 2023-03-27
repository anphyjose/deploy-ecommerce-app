import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdResultComponent } from './components/ad-result/ad-result.component';
import { AdStudentaddComponent } from './components/ad-studentadd/ad-studentadd.component';
import { AdStudenteditComponent } from './components/ad-studentedit/ad-studentedit.component';
import { AdStudentinfoComponent } from './components/ad-studentinfo/ad-studentinfo.component';
import { AdStudentviewComponent } from './components/ad-studentview/ad-studentview.component';
import { AdaddResultComponent } from './components/adadd-result/adadd-result.component';
import { AdexamRegComponent } from './components/adexam-reg/adexam-reg.component';
import { AdmainComponent } from './components/admain/admain.component';
import { AdminAdmissionComponent } from './components/admin-admission/admin-admission.component';
import { AdminRegComponent } from './components/admin-reg/admin-reg.component';
import { AdregActivitiesComponent } from './components/adreg-activities/adreg-activities.component';
import { AdregInsertComponent } from './components/adreg-insert/adreg-insert.component';
import { AdregUpdateComponent } from './components/adreg-update/adreg-update.component';
import { AdviewResultComponent } from './components/adview-result/adview-result.component';
import { AdviewresuiltEditComponent } from './components/adviewresuilt-edit/adviewresuilt-edit.component';
import { PortOpenComponent } from './components/port-open/port-open.component';
import { PortComponent } from './components/port/port.component';


const routes: Routes = [
  {path:'',component:AdmainComponent,

  children:[
    {path:'op',component:PortOpenComponent},
    {path:'aam',component:AdminAdmissionComponent},
    {path:'arg',component:AdminRegComponent},
    {path:'ari',component:AdregInsertComponent},
    {path:'ara',component:AdregActivitiesComponent},
    {path:'aru/:id',component:AdregUpdateComponent},
    {path:'aer',component:AdexamRegComponent},
    {path:'ars',component:AdResultComponent},
    {path:'arsa',component:AdaddResultComponent},
    {path:'arsv',component:AdviewResultComponent},
    {path:'arse/:id',component:AdviewresuiltEditComponent},
    {path:'adsi',component:AdStudentinfoComponent},
    {path:'asad',component:AdStudentaddComponent},
    {path:'advw',component:AdStudentviewComponent},
    {path:'adse/:id',component:AdStudenteditComponent},
    



    {path:'',redirectTo:'/ad/op',pathMatch:'full'}

    
   ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
