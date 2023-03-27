import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PortComponent } from './components/port/port.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { PortOpenComponent } from './components/port-open/port-open.component';
import { AdmainComponent } from './components/admain/admain.component';
import { AdminAdmissionComponent } from './components/admin-admission/admin-admission.component';
import { AdminRegComponent } from './components/admin-reg/admin-reg.component';
import { AdregInsertComponent } from './components/adreg-insert/adreg-insert.component';
import { AdregActivitiesComponent } from './components/adreg-activities/adreg-activities.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { KukkuPipe } from './kukku.pipe';
import { FilterPipe } from './components/filter.pipe';
import { AdregUpdateComponent } from './components/adreg-update/adreg-update.component';
import { AdexamRegComponent } from './components/adexam-reg/adexam-reg.component';
import { AdResultComponent } from './components/ad-result/ad-result.component';
import { AdaddResultComponent } from './components/adadd-result/adadd-result.component';
import { AdviewResultComponent } from './components/adview-result/adview-result.component';
import { AdviewresuiltEditComponent } from './components/adviewresuilt-edit/adviewresuilt-edit.component';
import { AdStudentinfoComponent } from './components/ad-studentinfo/ad-studentinfo.component';
import { AdStudentaddComponent } from './components/ad-studentadd/ad-studentadd.component';
import { AdStudentviewComponent } from './components/ad-studentview/ad-studentview.component';
import { AdStudenteditComponent } from './components/ad-studentedit/ad-studentedit.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PortComponent,
    PortOpenComponent,
    AdmainComponent,
    AdminAdmissionComponent,
    AdminRegComponent,
    AdregInsertComponent,
    AdregActivitiesComponent,
    KukkuPipe,
    FilterPipe,
    AdregUpdateComponent,
    AdexamRegComponent,
    AdResultComponent,
    AdaddResultComponent,
    AdviewResultComponent,
    AdviewresuiltEditComponent,
    AdStudentinfoComponent,
    AdStudentaddComponent,
    AdStudentviewComponent,
    AdStudenteditComponent,
 
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    ReactiveFormsModule
    
  ]
})
export class AdminModule { }
