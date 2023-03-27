import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaComponent } from '../com/ba/ba.component';
import { BbaComponent } from '../com/bba/bba.component';
import { BcaComponent } from '../com/bca/bca.component';
import { BcomComponent } from '../com/bcom/bcom.component';
import { BmmcComponent } from '../com/bmmc/bmmc.component';
import { BscComponent } from '../com/bsc/bsc.component';
import { MaComponent } from '../com/ma/ma.component';
import { McomComponent } from '../com/mcom/mcom.component';
import { MscComponent } from '../com/msc/msc.component';


@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit{

  panelOpenState = false;
  constructor(public dialog: MatDialog){
    
  }

  openDialogbmmc() {
    const dialogRef = this.dialog.open(BmmcComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogbba() {
    const dialogRef = this.dialog.open(BbaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogba() {
    const dialogRef = this.dialog.open(BaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogbca() {
    const dialogRef = this.dialog.open(BcaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogbsc() {
    const dialogRef = this.dialog.open(BscComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogbcom() {
    const dialogRef = this.dialog.open(BcomComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogma() {
    const dialogRef = this.dialog.open(MaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogmcom() {
    const dialogRef = this.dialog.open(McomComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogmsc() {
    const dialogRef = this.dialog.open(MscComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}

