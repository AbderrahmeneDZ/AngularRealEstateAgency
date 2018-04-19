import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 51.528308;
  lng: number = -0.3817814;

  constructor() { }

  ngOnInit() {
  }
}
