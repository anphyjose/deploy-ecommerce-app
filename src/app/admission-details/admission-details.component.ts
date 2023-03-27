import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { InstructionComponent } from '../com/instruction/instruction.component';


@Component({
  selector: 'app-admission-details',
  templateUrl: './admission-details.component.html',
  styleUrls: ['./admission-details.component.css']
})
export class AdmissionDetailsComponent {

constructor(private toastr: ToastrService, public dialog: MatDialog){}


  showSuccess() {
    this.toastr.success('downloaded successfully!');
  }

  openDialog() {
    this.dialog.open(InstructionComponent);
  }


}
