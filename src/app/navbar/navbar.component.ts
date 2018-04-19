import { SignUpComponent } from './../authentication/sign-up/sign-up.component';
import { SignInComponent } from './../authentication/sign-in/sign-in.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  OnSignInClicked(){
    this.dialog.open(SignInComponent,{width:'480px'});
  }
  OnSignUpClicked(){
    this.dialog.open(SignUpComponent,{width:'480px'});
  }

}
