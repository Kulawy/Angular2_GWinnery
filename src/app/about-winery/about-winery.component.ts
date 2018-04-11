import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-winery',
  templateUrl: './about-winery.component.html',
  styleUrls: ['./about-winery.component.css']
})
export class AboutWineryComponent implements OnInit {

  constructor() { }

  imageAboutWinery:any;

  ngOnInit() {
    this.imageAboutWinery = {'background-image': 'url("../../assets/images/winery_Winery.jpg")'};
  }

  textAboutWinery:(string)="Wino tworzeone z pasją ...."

}
