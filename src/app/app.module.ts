import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NotfountComponent } from './notfount/notfount.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { BaComponent } from './com/ba/ba.component';
import { BbaComponent } from './com/bba/bba.component';
import { BmmcComponent } from './com/bmmc/bmmc.component';
import { BcaComponent } from './com/bca/bca.component';
import { BscComponent } from './com/bsc/bsc.component';
import { BcomComponent } from './com/bcom/bcom.component';
import { McomComponent } from './com/mcom/mcom.component';
import { MscComponent } from './com/msc/msc.component';
import { MaComponent } from './com/ma/ma.component';
import { AdmissionpageComponent } from './admissionpage/admissionpage.component';
import { AdmissionDetailsComponent } from './admission-details/admission-details.component';
import { ToastrModule } from 'ngx-toastr';
import { InstructionComponent } from './com/instruction/instruction.component';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DetailDailogeComponent } from './com/detail-dailoge/detail-dailoge.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SampleComponent } from './sample/sample.component';
import { CourComponent } from './cour/cour.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { UserlogComponent } from './userlog/userlog.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ForgotDetailsComponent } from './forgot-details/forgot-details.component';
import { ForgotviewComponent } from './forgotview/forgotview.component';




 




@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AboutComponent,
    AcademicComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    UserAdmissionComponent,
    UserNotificationComponent,
    NotfountComponent,
    BaComponent,
    BbaComponent,
    BmmcComponent,
    BcaComponent,
    BscComponent,
    BcomComponent,
    McomComponent,
    MscComponent,
    MaComponent,
    AdmissionpageComponent,
    AdmissionDetailsComponent,
    InstructionComponent,
    DetailDailogeComponent,
    SampleComponent,
    CourComponent,
    AdminLogComponent,
    UserlogComponent,
    ForgotPassComponent,
    ForgotDetailsComponent,
    ForgotviewComponent,

  
    
   
   
 
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    }),
    HttpClientModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSidenavModule,
    NgbModule,
    NgImageSliderModule
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
