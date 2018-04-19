import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  jobs = [
    {
      title:"Job Offer Title 1",
      kind:"Full/Part Time",
      mission:[
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
      ],
      profile:[
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
      ],
      offers:[
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
      ],
      expend:false
    },
    {
      title:"Job Offer Title 2",
      kind:"Part Time",
      mission:[
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
      ],
      profile:[
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
      ],
      offers:[
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
      ],
      expend:false
    },
    {
      title:"Job Offer Title 3",
      kind:"Full Time",
      mission:[
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
        "You have to do ... ",
      ],
      profile:[
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
        "Are you ... ?",
      ],
      offers:[
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
        "We offer to you ...",
      ],
      expend:false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
