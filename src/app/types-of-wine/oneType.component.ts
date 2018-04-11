import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-one-type',
  templateUrl: "./oneType.component.html",
  styleUrls: ['./oneType.component.css']
})


export class OneTypeComponent implements OnInit {

  isBigScreanOne: boolean = false;
  private dimension: string = '400px';
  @Input() wineType: any;
  @Output() componentClick: EventEmitter<any> = new EventEmitter<any>();
  image: any;

  constructor() { }

  ngOnInit() {
    this.initPicture();
  };

  winTransform() {
    this.isBigScreanOne = !this.isBigScreanOne;
    this.wineType.bigObj = !this.wineType.bigObj;
    this.componentClick.emit(this.wineType);
  };

  initPicture() {
    if (this.wineType.bigObj === true) {
      this.dimension = '820px';
    }
    this.image = {
      'background-image': `url("${this.wineType.imgUrl}")`,
      'height': this.dimension
    };
  }

}
