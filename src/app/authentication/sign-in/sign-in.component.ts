import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SignInComponent>,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  OnSignInClicked(){
    this.dialogRef.close();
  }

  SwitchToSignUp(){
    this.dialogRef.close();
    this.dialog.open(SignUpComponent,{width:'480px'});
  }
}
