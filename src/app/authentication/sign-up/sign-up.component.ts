import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SignUpComponent>,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  OnSignUpClicked(){
    this.dialogRef.close();
  }
  SwitchToSignIn(){
    this.dialogRef.close();
    this.dialog.open(SignInComponent,{width:'480px'});
  }

}
