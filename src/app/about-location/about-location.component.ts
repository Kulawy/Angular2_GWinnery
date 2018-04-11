import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-location',
  templateUrl: './about-location.component.html',
  styleUrls: ['./about-location.component.css']
})
export class AboutLocationComponent implements OnInit {

  constructor() { }

  imageAboutLocation:any;

  ngOnInit() {
    this.imageAboutLocation = {'background-image': 'url("../../assets/images/winery_grapes.jpg")'};
  }

  textAboutLocation:(string)="Wino tworzeone z pasją ...."

}
