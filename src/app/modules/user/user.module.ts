import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsmainComponent } from './components/usmain/usmain.component';
import { URegComponent } from './components/u-reg/u-reg.component';
import { UserportComponent } from './components/userport/userport.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { UsAdmissionComponent } from './components/us-admission/us-admission.component';
import { UsadmissionRegComponent } from './components/usadmission-reg/usadmission-reg.component';
import { UsadmissionLoginComponent } from './components/usadmission-login/usadmission-login.component';
import { UsadmissionUpdateComponent } from './components/usadmission-update/usadmission-update.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { UsadmissionDetailsComponent } from './components/usadmission-details/usadmission-details.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { SortItemPipe } from './components/sort-item.pipe';
import { UsadmissionCandlistComponent } from './components/usadmission-candlist/usadmission-candlist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FilterPipe } from './components/filter.pipe';
import { SearchPipe } from './components/search.pipe';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsexamRegComponent } from './components/usexam-reg/usexam-reg.component';
import { UsexamloginComponent } from './components/usexamlogin/usexamlogin.component';
import { UsNotificationComponent } from './components/us-notification/us-notification.component';
import { UsexamResultComponent } from './components/usexam-result/usexam-result.component';
import { UsResultlogComponent } from './components/us-resultlog/us-resultlog.component';
import { UsStudentdetailsComponent } from './components/us-studentdetails/us-studentdetails.component';
import { UserAdmissionroutComponent } from './components/user-admissionrout/user-admissionrout.component';



@NgModule({
  declarations: [
    UsmainComponent,
    URegComponent,
    UserportComponent,
    UsAdmissionComponent,
    UsadmissionRegComponent,
    UsadmissionLoginComponent,
    UsadmissionUpdateComponent,
    UsadmissionDetailsComponent,
    UserRegistrationComponent,
    SortItemPipe,
    UsadmissionCandlistComponent,
    FilterPipe,
    SearchPipe,
    UsexamRegComponent,
    UsexamloginComponent,
    UsNotificationComponent,
    UsexamResultComponent,
    UsResultlogComponent,
    UsStudentdetailsComponent,
    UserAdmissionroutComponent,
  
   
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,


    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatSidenavModule
    
  ]
})
export class UserModule { }
