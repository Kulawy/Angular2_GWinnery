import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-wine',
  templateUrl: './about-wine.component.html',
  styleUrls: ['./about-wine.component.css']
})
export class AboutWineComponent implements OnInit {

  constructor() { }
  imageAboutWine:any;

  ngOnInit() {
    this.imageAboutWine = {'background-image': 'url("../../assets/images/winery_Wine.jpg")'};
  }

  textAboutWine:(string)="Wino tworzeone z pasją ...."

}
