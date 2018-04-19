import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  Tabs = ['Service 01','Service 02','Service 03','Service 04'];
  selectedTab = this.Tabs[0];

  ngOnInit() {
  }
  selectTab(index:number){
    this.selectedTab = this.Tabs[index];
  }
}
