import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserCGuard } from 'src/app/guards/user-c.guard';
import { UserGuardGuard } from 'src/app/guards/user-guard.guard';
import { UserNotificationComponent } from 'src/app/user-notification/user-notification.component';
import { URegComponent } from './components/u-reg/u-reg.component';
import { UsAdmissionComponent } from './components/us-admission/us-admission.component';
import { UsNotificationComponent } from './components/us-notification/us-notification.component';
import { UsResultlogComponent } from './components/us-resultlog/us-resultlog.component';
import { UsStudentdetailsComponent } from './components/us-studentdetails/us-studentdetails.component';
import { UsadmissionCandlistComponent } from './components/usadmission-candlist/usadmission-candlist.component';
import { UsadmissionDetailsComponent } from './components/usadmission-details/usadmission-details.component';
import { UsadmissionLoginComponent } from './components/usadmission-login/usadmission-login.component';
import { UsadmissionRegComponent } from './components/usadmission-reg/usadmission-reg.component';
import { UsadmissionUpdateComponent } from './components/usadmission-update/usadmission-update.component';
import { UserAdmissionroutComponent } from './components/user-admissionrout/user-admissionrout.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UsexamRegComponent } from './components/usexam-reg/usexam-reg.component';
import { UsexamResultComponent } from './components/usexam-result/usexam-result.component';
import { UsexamloginComponent } from './components/usexamlogin/usexamlogin.component';
import { UsmainComponent } from './components/usmain/usmain.component';

const routes: Routes = [
  {path:'', component:UsmainComponent,

  children:[
    {path:'ur', component:URegComponent},

    {path:'ua',component:UserAdmissionroutComponent,
   
    children:[
      {path:'',component:UsAdmissionComponent},
   
    {path:'ual',component:UsadmissionLoginComponent},
    
    {path:'uade/:id',component:UsadmissionDetailsComponent},
    {path:'uaud/:id',component:UsadmissionUpdateComponent},
    ]
    },

    {path:'uar',component:UsadmissionRegComponent},
    {path:'ureg',component:UserRegistrationComponent},
    {path:'uacl',component:UsadmissionCandlistComponent},
    {path:'uer',component:UsexamRegComponent},
    {path:'uel',component:UsexamloginComponent},
    {path:'usn',component:UsNotificationComponent},
    {path:'usre/:id',component:UsexamResultComponent},
    {path:'url',component:UsResultlogComponent},
    {path:'ussi/:id',component:UsStudentdetailsComponent},
   

    {path:'',redirectTo:'/uslog',pathMatch:'full'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
