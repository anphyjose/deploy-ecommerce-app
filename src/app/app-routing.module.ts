import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcademicComponent } from './academic/academic.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { AdmissionDetailsComponent } from './admission-details/admission-details.component';
import { AdmissionpageComponent } from './admissionpage/admissionpage.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { ForgotDetailsComponent } from './forgot-details/forgot-details.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ForgotviewComponent } from './forgotview/forgotview.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGuardGuard } from './guards/user-guard.guard';

import { MainpageComponent } from './mainpage/mainpage.component';
import { NotfountComponent } from './notfount/notfount.component';
import { SampleComponent } from './sample/sample.component';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { UserlogComponent } from './userlog/userlog.component';


const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path:'ho', component:MainpageComponent},
  {path:'ab', component:AboutComponent },
  {path:'ac', component:AcademicComponent},
  {path:'co', component:ContactComponent},
  {path:'am', component:AdmissionpageComponent},
  {path:'add',component:AdmissionDetailsComponent},
  {path:'kuk',component:UserNotificationComponent},
  {path:'sree',component:UserAdmissionComponent},
  {path:'sm',component:SampleComponent},
  {path:'cour',component:CourComponent},
  {path:'adlog',component:AdminLogComponent},
  {path:'uslog',component:UserlogComponent},
  {path:'forgot',component:ForgotPassComponent},
  {path:'reset/:id',component:ForgotDetailsComponent},
  {path:'rview/:id',component:ForgotviewComponent},



  {path:'',redirectTo:'ho',pathMatch:'full'},
 
  {path:'ad',
  canActivate:[AuthGuard],
  loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)},

  {path:'us',


  loadChildren:()=>import('./modules/user/user.module').then((m)=>m.UserModule)},
  
  {path:'**', component:NotfountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
